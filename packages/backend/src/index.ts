import { ENV } from "./env";
import { getPetitions } from "./routes/get-petitions";
import { signPetition } from "./routes/sign-petition";
import { styleText } from "node:util";

const CORS_HEADERS = {
	"Access-Control-Allow-Origin": ENV.FRONTEND_URL,
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const allowCors = async (_: Request): Promise<Response> => {
	return new Response(null, { status: 200, headers: CORS_HEADERS });
};

type Handler = (req: Request) => Promise<Response>;
type Middleware = (fn: Handler) => Handler;

const withCors = (fn: Handler): Handler => {
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

const withLogger = (fn: Handler): Handler => {
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

const withFrontendReferrer: Middleware = (fn) => {
	return async (req) => {
		const referrer = req.headers.get("referrer");

		if (referrer !== ENV.FRONTEND_URL) {
			return new Response(undefined, { status: 403 });
		}

		return fn(req);
	};
};

const server = Bun.serve({
	port: ENV.PORT,
	routes: {
		"/health": new Response("alive!"),
		"/sign": {
			GET: withFrontendReferrer(withLogger(withCors(getPetitions))),
			POST: withFrontendReferrer(withLogger(withCors(signPetition))),
			OPTIONS: withFrontendReferrer(withLogger(allowCors)),
		},
	},
});

console.log(`server running on ${server.url}`);
