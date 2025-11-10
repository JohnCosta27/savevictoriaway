import { signedPetitionArraySchema } from "types";
import { getSignatures } from "../models";

export const getPetitions = async (_: Request): Promise<Response> => {
	const signatures = await getSignatures();

	const parsedSignatures = signedPetitionArraySchema.parse(signatures);

	return Response.json(parsedSignatures, { status: 200 });
};
