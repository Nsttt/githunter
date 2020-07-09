import React from "react";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/core";

export function Brand() {
  return (
    <Flex alignItems="center">
      <Image src="/logo.svg" />
      <Box ml="10px">
        <Heading fontSize="24px">GitHunter</Heading>
        <Text color="gray.600">Starred project hunter for Github</Text>
      </Box>
    </Flex>
  );
}
