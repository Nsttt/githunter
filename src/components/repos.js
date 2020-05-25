import React from 'react';
import { Box, Flex, Image, Heading, Text, Link, Stack, Button } from '@chakra-ui/core';
import {GoStar, GoIssueOpened, GoRepoForked} from "react-icons/go";

export function Repos() {
    return (
        <Box borderWidth={1} bg="white" p="15px" rounded="5px">
            <Flex>
                <Image
                src=""
                w={"35px"}
                h={"35px"}
                rounded="5px" 
                />
                <Box ml="15px">
                    <Heading fontSize="16px">Nsttt</Heading>
                    <Text fontSize="13px">View Profile</Text>
                </Box>
            </Flex>

            
            <Box mb="15px">
                <Box mb="10px">
                    <Heading fontSize="19px" as="a" href="https://github.com/nsttt" target="_blank" color="purple.700">Github</Heading>
                    <Text fontSize="14px" color="gray.600">Build by &middot; <Link fontWeight={600} href="https://github.com/nsttt" target="_blank">Nsttt</Link> &middot; May 29, 2020</Text>
                </Box>
            
                <Text frontSize="14px" color="gray.900">Search for the most starred git projects</Text>
            </Box>

            <Stack isInline>
                <Button as="a" cursor="pointer" leftIcon={GoStar} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecor: "none"}}>4000</Button>
                <Button as="a" cursor="pointer" leftIcon={GoRepoForked} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecor: "none"}}>500</Button>
                <Button as="a" cursor="pointer" leftIcon={GoIssueOpened} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecor: "none"}}>70</Button>
            </Stack>
        </Box>
    )
}