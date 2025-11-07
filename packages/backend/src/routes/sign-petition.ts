import { z } from "zod"
import { insertSignature } from "../models";

const signPetitionSchema = z.object({
    email: z.string(),
    name: z.string().trim().min(1).max(30).optional(),
    comment: z.string().trim().min(10).max(10_000).optional(),
})

export const signPetition = async (req: Request): Promise<Response> => {
    const body = await req.json()

    const validatedBody = signPetitionSchema.safeParse(body);
    if (!validatedBody.success) {
        return Response.json({ error: validatedBody.error }, { status: 400 });
    }

    const insertedSignature = await insertSignature({
        email: validatedBody.data.email,
        name: validatedBody.data.name,
        comment: validatedBody.data.comment,
    })

    if (!insertedSignature) {
        return Response.json({ error: "inserting signature in database" }, { status: 500 });
    }

    return Response.json(insertedSignature, { status: 200 });
}
