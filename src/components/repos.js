import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link,
  Stack,
  Button,
} from "@chakra-ui/core";
import { GoStar, GoIssueOpened, GoRepoForked } from "react-icons/go";
import moment from "moment";
import colors from "../data/colors.json";

export function Repos(props) {
  const { isListView = false } = props;
  const Repos = props.repo;
  return (
    <Flex
      borderWidth={1}
      bg="white"
      p="15px"
      rounded="5px"
      alightItems="center"
    >
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
              <Text
                as="a"
                fontSize="13px"
                href={Repos.owner.html_url}
                target="_blank"
              >
                View Profile
              </Text>
            </Box>
          </Flex>
        )}

        <Box mb="15px">
          <Box mb="10px">
            <Flex fontSize="19px" color="purple.700">
              {isListView && (
                <>
                  <Text as="a" href={Repos.owner.html_url} target="_blank">
                    {Repos.owner.login}
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text as="a" href={Repos.html_url} target="_blank">
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

        <Stack isInline position="static" spacing="10px" bottom="0px">
          {Repos.language ? (
            <Button
              as="a"
              cursor="pointer"
              variant="link"
              fontSize="14px"
              iconSpacing="4px"
              target="_blank"
              _hover={{ textDecor: "none" }}
              color={
                colors[Repos.language].color
                  ? colors[Repos.language].color
                  : "#000"
              }
            >
              {Repos.language}
            </Button>
          ) : null}
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoStar}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            target="_blank"
            href={Repos.html_url + "/stargazers"}
            _hover={{ textDecor: "none" }}
          >
            {Repos.stargazers_count}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoRepoForked}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            target="_blank"
            href={Repos.html_url + "/network/members"}
            _hover={{ textDecor: "none" }}
          >
            {Repos.forks_count}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={GoIssueOpened}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            target="_blank"
            href={Repos.html_url + "/issues"}
            _hover={{ textDecor: "none" }}
          >
            {Repos.open_issues_count}
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src={Repos.owner.avatar_url}
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  );
}
