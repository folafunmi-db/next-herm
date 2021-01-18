import { Box, Flex } from "@chakra-ui/react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = ({children}) => {
	return (
		<Box>
			<Header></Header>
			<Flex>
				<Sidebar></Sidebar>
				<Main>{children}</Main>
			</Flex>
		</Box>
	);
};

export default Layout;
