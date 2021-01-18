import { Box, Flex, Icon, Avatar, Text } from "@chakra-ui/react";

const User = ({ avatar, sub, username }) => {
	return (
		<Flex alignItems="center">
			<Box>
				<Avatar size="sm" name={username} src={avatar} />
			</Box>
			{username && (
				<Box marginLeft="12px">
					<Text fontWeight="bold">{username}</Text>
					{sub && <Text fontSize="12px">{sub}</Text>}
				</Box>
			)}
		</Flex>
	);
};

const Header = () => {
	return (
		<Box backgroundColor="#fafafb" paddingLeft="50px" paddingRight="50px">
			<Flex
				alignItems="center"
				justifyContent="space-between"
				height="50px"
			>
				<Box bg="gray.200" rounded="full">
					<Icon
						name="logo"
						color="brand.500"
						width="40px"
						height="40px"
						viewBox="0 0 40 40"
					></Icon>
				</Box>
				<User username="Folafunmi M"></User>
			</Flex>
		</Box>
	);
};

export default Header;
