import { Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Index = ({ me }) => {
	return (
		<Layout me={me}>
			<Text fontSize="40px" color="brand.500" as="h1">
				Hello, {me.name}!
			</Text>
		</Layout>
	);
};

// context argument has information about the request like headers
// here this retrieves auth credentials from the browser cookie
Index.getInitialProps = async function (context) {
	const res = await fetch(`${process.env.BASE_URL}/api/me`, {
		headers: {
			cookie: context.req.headers.cookie,
		},
	});

	const me = await res.json();

	//to check if the user is logged in and if not to redirect to login page
	if (me.error) {
		console.log(me);
		context.res.writeHead(302, {
			Location: "api/login",
		});
		context.res.end();
		return;
	}

	return { me };
};

export default Index;
