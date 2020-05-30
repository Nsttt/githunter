import React, { useState, useEffect } from 'react';
import { Select, Menu, MenuButton, MenuList, MenuItem, Button, Stack} from '@chakra-ui/core';
import {FaTable, FaList} from "react-icons/fa";

import languages from '../data/languages.json'

export function Filters(props) {
    const {onViewChange} = props;
    const [viewType, setViewType] = useState('grid');
    
    useEffect(() => {
        onViewChange(viewType);
    },[viewType]);

    return(
        <Stack isInline>
            <Select>
                {languages.map((language) => (
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>

            <Menu>
                <MenuButton as={Button} bg="white" borderWidth={1} px="30px" fontWeight={400} leftIcon="calendar">
                     Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem as="a" href="#">
                    Attend a Workshop
                    </MenuItem>
                </MenuList>
            </Menu>

            <Stack 
            isInline 
            spacing={0} 
            borderWidth={1} 
            bg="white" 
            rounded="5px" 
            alignItems="center" 
            ml="10px"
            >
                <Button 
                h="100%" 
                onClick={() => setViewType("grid")} 
                fontWeight={400} 
                roundedRight={0} 
                leftIcon={FaTable} 
                bg={viewType === "grid" ? "gray.200" : "white"}
                >
                    Grid
                </Button>
                <Button 
                h="100%" 
                onClick={() => setViewType("list")} 
                fontWeight={400} 
                roundedLeft={0} 
                leftIcon={FaList} 
                bg={viewType === "list" ? "gray.200" : "white"}
                >
                    List
                </Button>
            </Stack>
        </Stack>
    )
}