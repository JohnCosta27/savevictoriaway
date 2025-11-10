import { z } from "zod";
import { signedPetitionSchema, signPetitionSchema } from 'types';

const baseURL = import.meta.env.BASE_URL;

export const signSignature = async (signature: z.infer<typeof signPetitionSchema>): Promise<z.infer<typeof signedPetitionSchema>> => {
    const res = await fetch(baseURL, {
        method: 'POST', body: JSON.stringify(signature),
    })

    const body = await res.json();
    const validatedBody = signedPetitionSchema.parse(body);

    return validatedBody
}
