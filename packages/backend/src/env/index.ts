import { z } from "zod";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const envSchema = z.object({
	PORT: z
		.string()
		.refine(
			(port) => parseInt(port, 10) > 0 && parseInt(port, 10) < 65536,
			"Invalid port number",
		),
	DATABASE_URL: z.string().min(10),
	FRONTEND_URL: z.url(),
});

type Env = z.infer<typeof envSchema>;

export const ENV: Env = envSchema.parse(process.env);
