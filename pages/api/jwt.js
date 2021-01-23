import auth0 from "lib/auth0";

export default async function me(req, res) {
	try {
		const sessionData = await auth0.getSession(req);
		res.send(sessionData.accessToken);
		res.end();
	} catch (err) {
		console.error(err);
		res.status(err.status || 400).json({ error: "Something went wrong" });
	}
}
