import { db } from "./database";
import { signaturesTable } from "./schema";
import { desc } from "drizzle-orm";

export const insertSignature = async (
	signature: typeof signaturesTable.$inferInsert,
): Promise<typeof signaturesTable.$inferSelect | undefined> => {
	const [insertedSignature] = await db
		.insert(signaturesTable)
		.values(signature)
		.returning();

	return insertedSignature;
};

export const getSignatures = async (): Promise<
	Array<typeof signaturesTable.$inferSelect>
> => {
	return db
		.select()
		.from(signaturesTable)
		.orderBy(desc(signaturesTable.createdAt));
};
