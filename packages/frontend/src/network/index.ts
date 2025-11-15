import { z } from "zod";
import { signedPetitionSchema, signPetitionSchema } from "types";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const signedPetitionWithParsedDate = signedPetitionSchema.extend({
	createdAt: z.string().transform((date: string) => new Date(date)),
});

const signedPetitionSignatures = z.array(signedPetitionWithParsedDate);

export const getSignatures = async (): Promise<
	z.infer<typeof signedPetitionSignatures>
> => {
	const res = await fetch(`${backendUrl}/sign`, { referrer: location.origin });

	const body = await res.json();
	const validatedBody = signedPetitionSignatures.parse(body);

	return validatedBody;
};

export const signPetition = async (
	signature: z.infer<typeof signPetitionSchema>,
): Promise<z.infer<typeof signedPetitionWithParsedDate>> => {
	const res = await fetch(`${backendUrl}/sign`, {
		method: "POST",
		body: JSON.stringify(signature),
	});

	const body = await res.json();
	const validatedBody = signedPetitionWithParsedDate.parse(body);

	return validatedBody;
};
