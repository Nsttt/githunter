import React from 'react';
import { Text } from '@chakra-ui/core'

export function GroupTitle() {
    return (
    <Text fontSize="24px" fontWeight={700}>
       Test <Text fontSize="15px" fontWeight={500} color="gray.500" ml="5px" as="span"> test 2</Text>
    </Text>
    )
}
