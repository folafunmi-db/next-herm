import auth0 from "lib/auth0";

export default async function callback(req, res) {
	try {
		await auth0.handleCallback(req, res, { redirectTo: "/" });
	} catch (err) {
		console.error(err);
		res.status(err.status || 400).json({ error: "Something went wrong" });
	}
}
