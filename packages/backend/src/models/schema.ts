import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const signaturesTable = pgTable("signatures", {
    id: uuid().primaryKey().defaultRandom(),
    email: text().notNull(),
    name: text(),
    comment: text(),
});
