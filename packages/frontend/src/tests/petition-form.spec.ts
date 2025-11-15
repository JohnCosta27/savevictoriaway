import { test } from '@playwright/test';

// Mock response for successful signature
const mockSignatureResponse = {
  id: 'mock-signature-id',
  name: 'Test User',
  message: 'This is a test signature',
  date: new Date().toISOString(),
};

// Global fetch mock for POST /sign
async function setupFetchMock(page) {
  await page.route('**/sign', async (route, request) => {
    if (request.method() === 'POST') {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockSignatureResponse),
      });
    } else {
      await route.continue();
    }
  });
}

// Reset state helper
async function resetMocks(page) {
  // Currently no stateful mocks, but placeholder for future
}

// Test suite for Petition Form page
test.describe('Petition Form Page', () => {
  test.beforeEach(async ({ page }) => {
    await setupFetchMock(page);
    await resetMocks(page);
    await page.goto('/');
    // Scroll to petition form section
    await page.locator('#petition').scrollIntoViewIfNeeded();
  });

  test('placeholder: anonymous submission', async ({ page }) => {
    // TODO: Implement test for anonymous submission
  });

  test('placeholder: named submission', async ({ page }) => {
    // TODO: Implement test for named submission
  });

  test('placeholder: validation errors', async ({ page }) => {
    // TODO: Implement test for validation errors
  });

  test('placeholder: UI behavior', async ({ page }) => {
    // TODO: Implement test for UI behavior
  });
});
