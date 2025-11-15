import { ENV } from "./env";
import { getPetitions } from "./routes/get-petitions";
import { signPetition } from "./routes/sign-petition";
import { styleText } from "node:util";

const CORS_HEADERS = {
	"Access-Control-Allow-Origin": ENV.FRONTEND_URL,
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "*",
};

const allowCors = async (_: Request): Promise<Response> => {
	return new Response(null, { status: 200, headers: CORS_HEADERS });
};

type Handler = (req: Request) => Promise<Response>;
type Middleware = (fn: Handler) => Handler;

const withCors: Middleware = (fn) => {
	return async (req) => {
		const res = await fn(req);

		for (const [header, value] of Object.entries(CORS_HEADERS)) {
			res.headers.set(header, value);
		}

		return res;
	};
};

const getColors = (status: number): Parameters<typeof styleText>[0] => {
	if (status >= 200 && status < 300) {
		return ["bgGreen", "white"];
	} else if (status >= 300 && status < 400) {
		return ["bgYellow", "white"];
	} else if (status >= 400 && status < 500) {
		return ["bgRed", "white"];
	} else if (status >= 500) {
		return ["bgRedBright", "white"];
	} else {
		return ["bgBlack", "white"];
	}
};

const withLogger: Middleware = (fn) => {
	return async (req) => {
		const res = await fn(req);

		const code = res.status;

		const styles = getColors(code);
		const codeText = styleText(styles, `${code}`);

		const msg = `${codeText}: ${req.method} ${req.url}`;
		console.log(msg);

		return res;
	};
};

const server = Bun.serve({
	port: ENV.PORT,
	routes: {
		"/health": new Response("alive!"),
		"/sign": {
			GET: withLogger(withCors(getPetitions)),
			POST: withLogger(withCors(signPetition)),
			OPTIONS: withLogger(allowCors),
		},
	},
});

console.log(`server running on ${server.url}`);
