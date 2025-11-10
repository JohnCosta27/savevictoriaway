import { insertSignature } from "../models";
import { signedPetitionSchema, signPetitionSchema } from "types";

export const signPetition = async (req: Request): Promise<Response> => {
	const body = await req.json();

	const validatedBody = signPetitionSchema.safeParse(body);
	if (!validatedBody.success) {
		console.log(validatedBody.error);
		return Response.json({ error: validatedBody.error }, { status: 400 });
	}

	const insertedSignature = await insertSignature({
		email: validatedBody.data.email,
		name: validatedBody.data.name,
		comment: validatedBody.data.comment,
	});

	if (!insertedSignature) {
		return Response.json(
			{ error: "inserting signature in database" },
			{ status: 500 },
		);
	}

	const parsedSignedSignature = signedPetitionSchema.parse(insertedSignature);

	return Response.json(parsedSignedSignature, { status: 200 });
};
