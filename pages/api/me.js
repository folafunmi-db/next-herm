import auth0 from "lib/auth0";

export default async function me(req, res) {
	try {
		await auth0.handleProfile(req, res);
	} catch (err) {
		console.error(err);
		res.status(err.status || 400).json({ error: "Something went wrong" });
	}
}
