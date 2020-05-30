import React from 'react';
import { Button, Stack, Flex } from '@chakra-ui/core';
import { FaGithub, FaTwitter} from 'react-icons/fa';

import { Brand } from './brand';

export function PageHeader () {
    return (
        <Flex justifyContent="space-between" alignItems="center" pt="15px">
         <Brand />
        <Stack isInline>
            <Button leftIcon={FaGithub}> View Source</Button>
            <Button leftIcon={FaTwitter} variantColor="blue"> Tweet </Button>
        </Stack>
    </Flex>
    )
}