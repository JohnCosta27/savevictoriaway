import { ENV } from "./env";
import { getPetitions } from "./routes/get-petitions";
import { signPetition } from "./routes/sign-petition";

const CORS_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const allowCors = async (_: Request): Promise<Response> => {
	return new Response(null, { status: 200, headers: CORS_HEADERS });
};

type Handler = (req: Request) => Promise<Response>;

const withCors = (fn: Handler): Handler => {
	return async (req) => {
		const res = await fn(req);

		for (const [header, value] of Object.entries(CORS_HEADERS)) {
			res.headers.set(header, value);
		}

		return res;
	};
};

const server = Bun.serve({
	port: ENV.PORT,
	routes: {
		"/health": new Response("alive!"),
		"/sign": {
			GET: withCors(getPetitions),
			POST: withCors(signPetition),
			OPTIONS: allowCors,
		},
	},
});

console.log(`server running on ${server.url}`);
