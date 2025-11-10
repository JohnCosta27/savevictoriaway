import type z from "zod";
import { insertSignature } from "../models";
import { signedPetitionSchema, signPetitionSchema } from 'types'

export const signPetition = async (req: Request): Promise<Response> => {
    const body = await req.json()

    const validatedBody = signPetitionSchema.safeParse(body);
    if (!validatedBody.success) {
        return Response.json({ error: validatedBody.error }, { status: 400 });
    }

    const _insertedSignature = await insertSignature({
        email: validatedBody.data.email,
        name: validatedBody.data.name,
        comment: validatedBody.data.comment,
    })

    if (!_insertedSignature) {
        return Response.json({ error: "inserting signature in database" }, { status: 500 });
    }

    const insertedSignature = _insertedSignature satisfies z.infer<typeof signedPetitionSchema>

    return Response.json(insertedSignature, { status: 200 });
}
