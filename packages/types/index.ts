import z from "zod";

export const signPetitionSchema = z.object({
	email: z.string(),
	name: z.string().trim().min(1).max(30).nullish(),
	comment: z.string().trim().min(5).max(10_000).nullish(),
});

export const signedPetitionSchema = signPetitionSchema.extend({
	id: z.uuid(),
	createdAt: z.date().transform((date: Date) => date.toISOString()),
});

export const signedPetitionArraySchema = z.array(signedPetitionSchema);
