import React from 'react';
import {  Box, Flex, SimpleGrid, Button } from '@chakra-ui/core';

//Components
import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Repos } from './components/repos';

export function Feed() {
return <Box maxWidth="1200px" mx="auto">
     <PageHeader />
     
     <Flex alignItems="center" justifyContent="space-between">
            <GroupTitle />
            <Filters />
        </Flex>

        <SimpleGrid columns={3} spacing="16px">
            <Repos />
            <Repos />
            <Repos />
            <Repos />
            <Repos />
            <Repos />
            <Repos />
        </SimpleGrid>

        <Flex alignItems="center" justifyContent="center" my="20px">
            <Button variantColor="blue">Load more</Button>
        </Flex>
</Box>;
}