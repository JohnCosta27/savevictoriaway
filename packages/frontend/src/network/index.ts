import { z } from "zod";
import { signedPetitionSchema, signPetitionSchema } from "types";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const signPetition = async (
	signature: z.infer<typeof signPetitionSchema>,
): Promise<z.infer<typeof signedPetitionSchema>> => {
	const res = await fetch(`${backendUrl}/sign-petition`, {
		method: "POST",
		body: JSON.stringify(signature),
	});

	const body = await res.json();
	const validatedBody = signedPetitionSchema.parse(body);

	return validatedBody;
};
