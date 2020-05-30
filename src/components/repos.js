import React from 'react';
import { Box, Flex, Image, Heading, Text, Link, Stack, Button } from '@chakra-ui/core';
import {GoStar, GoIssueOpened, GoRepoForked} from "react-icons/go";

export function Repos(props) {
    const {isListView} = props;


    return (
        <Flex borderWidth={1} bg="white" p="15px" rounded="5px" alightItems="center">
            <Flex flex={1} flexDir="column">
                {!isListView && (
                <Flex mb="15px">
                    <Image
                    src="https://avatars0.githubusercontent.com/u/23436531?s=460&u=d3a533566c1f05521da0a1ff26e5c3d0a764ba76&v=4"
                    w={"35px"}
                    h={"35px"}
                    rounded="5px" 
                    />
                    <Box ml="15px">
                        <Heading fontSize="16px">Nsttt</Heading>
                        <Text fontSize="13px">View Profile</Text>
                    </Box>
                </Flex>
                )}
                
                <Box mb="15px">
                    <Box mb="10px">
                        <Flex fontSize="19px" as="a" color="purple.700">
                            {isListView && (
                                <>
                                    <Text
                                        as="a"
                                        href="https://github.com/nsttt"
                                        target="_blank"
                                    >
                                        nsttt
                                    </Text>
                                    &nbsp;/&nbsp;
                                </>
                            )}
                            <Text
                                as="a"
                                href="https://github.com/nsttt/githunter"
                                target="_blank"
                            >
                                githunter
                            </Text>
                        </Flex>
                        <Text fontSize="14px" color="gray.600">
                            Build by &middot;{" "}
                            <Link
                            fontWeight={600}
                            href="https://github.com/nsttt"
                            target="_blank"
                            >
                                Nsttt
                            </Link>{" "}
                            &middot; May 29, 2020
                        </Text>
                    </Box>
                
                    <Text frontSize="14px" color="gray.900">
                        Search for the most starred git projects
                    </Text>
                </Box>

                <Stack isInline spacing="10px">
                    <Button
                        as="a"
                        cursor="pointer"
                        leftIcon={GoStar}
                        variant="link"
                        fontSize="14px"
                        iconSpacing="4px"
                        _hover={{textDecor: "none"}}
                    >
                        4000
                    </Button>
                    <Button 
                        as="a"
                        cursor="pointer"
                        leftIcon={GoRepoForked}
                        variant="link" fontSize="14px"
                        iconSpacing="4px"
                        _hover={{textDecor: "none"}}
                    >
                        500
                    </Button>
                    <Button
                        as="a"
                        cursor="pointer"
                        leftIcon={GoIssueOpened}
                        variant="link"
                        fontSize="14px"
                        iconSpacing="4px"
                        _hover={{textDecor: "none"}}
                    >
                        70
                    </Button>
                </Stack>
            </Flex>
            {isListView &&(
                <Image
                src="https://avatars0.githubusercontent.com/u/23436531?s=460&u=d3a533566c1f05521da0a1ff26e5c3d0a764ba76&v=4"
                w={"105px"}
                h={"105px"}
                rounded="100%"
                />
            )}
        </Flex>
    )
}