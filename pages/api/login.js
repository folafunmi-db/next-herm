import auth0 from "lib/auth0";

export default async function login(req, res) {
	try {
		await auth0.handleLogin(req, res);
	} catch (err) {
		console.error(err);
		res.status(err.status || 400).json({ error: "Something went wrong" });
	}
}
