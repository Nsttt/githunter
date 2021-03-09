import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
