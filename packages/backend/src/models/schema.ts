import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const signaturesTable = pgTable("signatures", {
	id: uuid().primaryKey().defaultRandom(),
	email: text().notNull(),
	name: text(),
	comment: text(),
	createdAt: timestamp().defaultNow().notNull(),
});
