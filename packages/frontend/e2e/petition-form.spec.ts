import { test, expect, Page } from "@playwright/test";

const getFormLocators = (page: Page) => {
	const form = page.getByTestId("petition-form").first();
	return {
		form,
		anonymousCheckbox: form.locator("#anonymous"),
		nameInput: form.locator('input[placeholder="Your Name"]'),
		emailInput: form.locator('input[type="email"]'),
		commentTextarea: form.locator("textarea"),
		submitButton: form.locator('button[type="submit"]'),
	};
};

test.beforeEach(async ({ page }) => {
	const mockSignatures: any[] = [];

	await page.route("**/sign", async (route) => {
		if (route.request().method() === "POST") {
			const body = JSON.parse(route.request().postData() || "{}");
			const newSignature = {
				id: "fceff5b5-a185-4d42-a539-3a9c7b5edacd",
				createdAt: new Date().toISOString(),
				...body,
			};
			mockSignatures.push(newSignature);

			await route.fulfill({
				status: 200,
				contentType: "application/json",
				body: JSON.stringify(newSignature),
			});
		} else if (route.request().method() === "GET") {
			await route.fulfill({
				status: 200,
				contentType: "application/json",
				body: JSON.stringify(mockSignatures),
			});
		} else {
			await route.continue();
		}
	});

	await page.goto("/");
});

test("anonymous submission with valid email only", async ({ page }) => {
	const { anonymousCheckbox, emailInput, submitButton } = getFormLocators(page);
	await anonymousCheckbox.check();
	await emailInput.fill("test@example.com");
	await submitButton.click();
	await expect(
		page.getByText("Thank you for signing the petition.").first(),
	).toBeVisible();
	await expect(emailInput).toHaveValue("");
});

test("named submission with valid name and email", async ({ page }) => {
	const { nameInput, emailInput, submitButton } = getFormLocators(page);
	await nameInput.fill("John Doe");
	await emailInput.fill("john@example.com");
	await submitButton.click();
	await expect(
		page.getByText("Thank you for signing the petition.").first(),
	).toBeVisible();
	await expect(emailInput).toHaveValue("");
	await expect(nameInput).toHaveValue("");
});

test("submission with valid comment", async ({ page }) => {
	const { anonymousCheckbox, emailInput, commentTextarea, submitButton } =
		getFormLocators(page);
	await anonymousCheckbox.check();
	await emailInput.fill("test@example.com");
	await commentTextarea.fill("This carpark is essential for our community");
	await submitButton.click();
	await expect(
		page.getByText("Thank you for signing the petition.").first(),
	).toBeVisible();
	await expect(commentTextarea).toHaveValue("");
});

test("comment with less than 5 characters shows validation error", async ({
	page,
}) => {
	const { anonymousCheckbox, emailInput, commentTextarea, submitButton } =
		getFormLocators(page);
	await anonymousCheckbox.check();
	await emailInput.fill("test@example.com");
	await commentTextarea.fill("Hi");
	await submitButton.click();
	const validationMessage = await commentTextarea.evaluate(
		(el: HTMLTextAreaElement) => el.validationMessage,
	);
	expect(validationMessage).toBeTruthy();
});

test("invalid email shows validation error", async ({ page }) => {
	const { anonymousCheckbox, emailInput, submitButton } = getFormLocators(page);
	await anonymousCheckbox.check();
	await emailInput.fill("notanemail");
	await submitButton.click();
	const validationMessage = await emailInput.evaluate(
		(el: HTMLInputElement) => el.validationMessage,
	);
	expect(validationMessage).toBeTruthy();
});

test("empty required fields show validation error", async ({ page }) => {
	const { nameInput, submitButton } = getFormLocators(page);
	await submitButton.click();
	const nameValidationMessage = await nameInput.evaluate(
		(el: HTMLInputElement) => el.validationMessage,
	);
	expect(nameValidationMessage).toBeTruthy();
});

test("anonymous checkbox toggles name field visibility", async ({ page }) => {
	const { anonymousCheckbox, nameInput } = getFormLocators(page);
	await expect(nameInput).toBeVisible();
	await anonymousCheckbox.check();
	await expect(nameInput).toBeHidden();
	await anonymousCheckbox.uncheck();
	await expect(nameInput).toBeVisible();
});

test("submit button is disabled while submitting", async ({ page }) => {
	const mockSignatures: any[] = [];

	await page.route("**/sign", async (route) => {
		if (route.request().method() === "POST") {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			const body = JSON.parse(route.request().postData() || "{}");
			const newSignature = {
				id: `${Date.now()}-${Math.random()}`,
				createdAt: new Date().toISOString(),
				...body,
			};
			mockSignatures.push(newSignature);

			await route.fulfill({
				status: 200,
				contentType: "application/json",
				body: JSON.stringify(newSignature),
			});
		}
	});

	const { anonymousCheckbox, emailInput, submitButton } = getFormLocators(page);
	await anonymousCheckbox.check();
	await emailInput.fill("test@example.com");

	await submitButton.click();
	await expect(submitButton).toBeDisabled();
	await expect(submitButton).toHaveText("Submitting...");
});

test("signature counter increases after submissions", async ({ page }) => {
	const signatureCountLocator = page.locator("text=/\\d+ people/");

	const { anonymousCheckbox, emailInput, submitButton } = getFormLocators(page);

	await anonymousCheckbox.check();
	await emailInput.fill("first@example.com");
	await submitButton.click();
	await expect(
		page.getByText("Thank you for signing the petition.").first(),
	).toBeVisible();

	await expect(signatureCountLocator).toContainText("1 people");

	await anonymousCheckbox.check();
	await emailInput.fill("second@example.com");
	await submitButton.click();
	await expect(
		page.getByText("Thank you for signing the petition.").first(),
	).toBeVisible();

	await expect(signatureCountLocator).toContainText("2 people");
});

test("submitted petition appears on testimonies page with correct information", async ({
	page,
}) => {
	const testName = "Jane Smith";
	const testEmail = "jane@example.com";
	const testComment =
		"This carpark closure has significantly impacted my daily routine";

	const { nameInput, emailInput, commentTextarea, submitButton } =
		getFormLocators(page);

	await nameInput.fill(testName);
	await emailInput.fill(testEmail);
	await commentTextarea.fill(testComment);
	await submitButton.click();

	await expect(
		page.getByText("Thank you for signing the petition.").first(),
	).toBeVisible();

	await page.goto("testimonies");

	await expect(page.getByText(testName)).toBeVisible();
	await expect(page.getByText(testComment)).toBeVisible();

	await expect(page.locator("text=/\\d+ Signatures/")).toContainText(
		"1 Signatures",
	);
});
