import { Box, Flex } from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = ({children, me}) => {
	return (
		<Box>
			<Header me={me}></Header>
			<Flex>
				<Sidebar></Sidebar>
				<Main>{children}</Main>
			</Flex>
		</Box>
	);
};

export default Layout;
