import React from "react";
import { Button, Stack, Flex } from "@chakra-ui/core";
import { FaGithub, FaTwitter } from "react-icons/fa";

import { Brand } from "./brand";

export function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt="15px">
      <Brand />
      <Stack isInline>
        <Button
          leftIcon={FaGithub}
          variantColor="teal"
          as="a"
          target="_blank"
          href="https://github.com/Nsttt/githunter"
        >
          View Source
        </Button>
        <Button
          leftIcon={FaTwitter}
          variantColor="blue"
          as="a"
          target="_blank"
          href="https://twitter.com/intent/tweet?text=GitHunter – Starred project hunter for Github by @NesteaHD4K https://github.com/Nsttt/githunter"
        >
          Tweet
        </Button>
      </Stack>
    </Flex>
  );
}
