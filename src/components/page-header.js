import React from "react";
import { Button, Stack, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import Brand from "./brand";

export default function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt="15px">
      <Brand />
      <Stack isInline>
        <Button
          leftIcon={<FaGithub />}
          colorScheme="teal"
          as="a"
          target="_blank"
          href="https://github.com/Nsttt/githunter"
        >
          Source
        </Button>
      </Stack>
    </Flex>
  );
}
