import React, { useState } from 'react';
import {  Box, Flex, SimpleGrid, Button } from '@chakra-ui/core';

import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Repos } from './components/repos';

export function Feed() {
    const [viewType, setViewType] = useState();


    return <Box maxWidth="1200px" mx="auto">
        <PageHeader />
        
        <Flex alignItems="center" justifyContent="space-between">
                <GroupTitle />
                <Filters onViewChange={(viewType) => {
                    setViewType(viewType);
                }}/>
            </Flex>

            <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing="16px">
                <Repos isListView={viewType === 'list'} />
                <Repos isListView={viewType === 'list'} />
                <Repos isListView={viewType === 'list'} />
                <Repos isListView={viewType === 'list'} />
                <Repos isListView={viewType === 'list'} />
                <Repos isListView={viewType === 'list'} />
                <Repos isListView={viewType === 'list'} />
            </SimpleGrid>

            <Flex alignItems="center" justifyContent="center" my="20px">
                <Button variantColor="blue">Load more</Button>
            </Flex>
    </Box>;
}