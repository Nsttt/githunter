import React from "react";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";

export default function Brand() {
  return (
    <Flex alignItems="center">
      <Image
        src={`${process.env.PUBLIC_URL}/logo.svg`}
        height="65px"
        width="75px"
      />
      <Box ml="10px">
        <Heading fontSize="24px">GitHunter</Heading>
        <Text color="gray.600">Starred project hunter for Github</Text>
      </Box>
    </Flex>
  );
}
