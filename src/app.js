import React from "react";
import { Box } from "@chakra-ui/react";

import Feed from "./feed";

export default function App() {
  return (
    <Box width=" 100vm " minHeight="100vh" bg="gray.100">
      <Feed />
    </Box>
  );
}
