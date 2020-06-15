import React from 'react';
import { Box, Flex, Image, Heading, Text, Link, Stack, Button } from '@chakra-ui/core';
import {GoStar, GoIssueOpened, GoRepoForked} from "react-icons/go";
import moment from "moment";

export function Repos(props) {
    const {isListView = false, Repos} = props;

    return (
        <Flex borderWidth={1} bg="white" p="15px" rounded="5px" alightItems="center">
            <Flex flex={1} flexDir="column">
                {!isListView && (
                <Flex mb="15px">
                    <Image
                    src={Repos.owner.avatar_url}
                    w={"35px"}
                    h={"35px"}
                    rounded="5px" 
                    />
                    <Box ml="15px">
                        <Heading fontSize="16px">{Repos.owner.login}</Heading>
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
                                        href={Repos.owner.html_url}
                                        target="_blank"
                                    >
                                        {Repos.owner.login}
                                    </Text>
                                    &nbsp;/&nbsp;
                                </>
                            )}
                            <Text
                                as="a"
                                href={Repos.html_url}
                                target="_blank"
                            >
                                {Repos.name}
                            </Text>
                        </Flex>
                        <Text fontSize="14px" color="gray.600">
                            Build by &middot;{" "}
                            <Link
                            fontWeight={600}
                            href={Repos.owner.html_url}
                            target="_blank"
                            >
                                {Repos.owner.login}
                            </Link>{" "}
                            &middot; {moment(Repos.created_at).format("MMMM D, YYYY")}
                        </Text>
                    </Box>
                
                    <Text frontSize="14px" color="gray.900">
                        {Repos.description}
                    </Text>
                </Box>

                <Stack isInline spacing="10px">
                    <Button
                        as="a"
                        href={`${Repos.html_url}/stargazers`}
                        cursor="pointer"
                        leftIcon={GoStar}
                        variant="link"
                        fontSize="13px"
                        iconSpacing="4px"
                        target="_blank"
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