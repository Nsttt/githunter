import React, { useState, useEffect } from "react";
import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import moment from "moment";
import useFetch from "use-http";

import PageHeader from "./components/page-header";
import GroupTitle from "./components/group-title";
import Filters from "./components/filters";
import Repo from "./components/repo";
import PageLoader from "./components/page-loader";

function transformFilters({ startDate, endDate, language }) {
  const transformedFilters = {};

  const languageQuery = language ? `language:${language} ` : "";
  const dateQuery = `created:${startDate}..${endDate}`;

  transformedFilters.q = languageQuery + dateQuery;
  transformedFilters.sort = "stars";
  transformedFilters.order = "desc";

  return transformedFilters;
}

export default function Feed() {
  const { get, loading } = useFetch("https://api.github.com");
  const [viewType, setViewType] = useState("grid");
  const [dateJump, setDateJump] = useState("day");
  const [language, setLanguage] = useState();

  const [repositories, setRepositories] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(moment().subtract(1, "day").format());

  useEffect(() => {
    const effectEndDate = moment().subtract(1, "day").format();
    const effectStartDate = moment(endDate).subtract(1, dateJump).format();

    setEndDate(effectEndDate);
    setStartDate(effectStartDate);

    setRepositories([]);
  }, [dateJump, endDate, language]);

  useEffect(() => {
    if (!startDate) {
      return;
    }
    const filters = transformFilters({ language, startDate, endDate });
    const filtersQuery = new URLSearchParams(filters).toString();

    get(`/search/repositories?${filtersQuery}`).then((data) => {
      setRepositories([
        ...repositories,
        {
          startDate,
          endDate,
          items: data.items,
        },
      ]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  return (
    <Box maxWidth="1200px" mx="auto" px="15px">
      <PageHeader />
      {repositories.length === 0 && loading && <PageLoader />}

      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb="25px"
        flexDirection={["column", "column", "column", "row"]}
      >
        <GroupTitle
          startDate={repositories?.[0]?.startDate}
          endDate={repositories?.[0]?.endDate}
        />
        <Filters
          viewType={viewType}
          onViewChange={setViewType}
          dateJump={dateJump}
          onDateJumpChange={setDateJump}
          language={language}
          onLanguageChange={setLanguage}
        />
      </Flex>

      {repositories.map((repoGroup, counter) => {
        const groupTitle = counter > 0 && (
          <Flex alignItems="center" justifyContent="center" mt="25px" mb="15px">
            <GroupTitle
              startDate={repoGroup.startDate}
              endDate={repoGroup.endDate}
            />
          </Flex>
        );
        return (
          <Box key={repoGroup}>
            {groupTitle}
            <SimpleGrid
              columns={viewType === "list" ? 1 : [1, 1, 2, 3, 3]}
              spacing="15px"
            >
              {repoGroup.items.map((repo) => (
                <Repo
                  isListView={viewType === "list"}
                  repo={repo}
                  key={repo.id}
                />
              ))}
            </SimpleGrid>
          </Box>
        );
      })}

      <Flex alignItems="center" justifyContent="center" my="20px">
        <Button
          isLoading={loading}
          onClick={() => {
            setEndDate(startDate);
            setStartDate(moment(startDate).subtract(1, dateJump).format());
          }}
          colorScheme="blue"
        >
          Load more
        </Button>
      </Flex>
    </Box>
  );
}
