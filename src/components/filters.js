import React from "react";
import { nanoid } from "nanoid";
import {
  Select,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Stack,
  Box,
  MenuItem,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

import { FaTable, FaList } from "react-icons/fa";

import languages from "../data/languages.json";

export default function Filters(props) {
  const {
    onViewChange,
    viewType,
    onDateJumpChange,
    dateJump,
    language,
    onLanguageChange,
  } = props;

  return (
    <Stack isInline>
      <Select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        bg="white"
        w="100px"
      >
        {languages.map((lang) => (
          <option key={nanoid()} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </Select>

      <Menu>
        <MenuButton
          textAlign="left"
          w="120px"
          justifyContent="flex-start"
          as={Button}
          bg="white"
          borderWidth={1}
          px="15px"
          fontWeight={400}
          _focus={{ boxShadow: "none" }}
          key="views"
        >
          <CalendarIcon mr={3} />
          <Box key="date" as="span" textTransform="capitalize">
            {dateJump}
          </Box>
        </MenuButton>
        <MenuList key="menu-list">
          <MenuItem onClick={() => onDateJumpChange("day")}>Daily</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("week")}>Weekly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("month")}>Monthly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange("year")}>Yearly</MenuItem>
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
          onClick={() => onViewChange("grid")}
          fontWeight={400}
          roundedRight={0}
          leftIcon={<FaTable />}
          bg={viewType === "grid" ? "gray.200" : "white"}
        >
          Grid
        </Button>
        <Button
          h="100%"
          onClick={() => onViewChange("list")}
          fontWeight={400}
          roundedLeft={0}
          leftIcon={<FaList />}
          bg={viewType === "list" ? "gray.200" : "white"}
        >
          List
        </Button>
      </Stack>
    </Stack>
  );
}
