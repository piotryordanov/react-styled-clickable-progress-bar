import React, { useState, useEffect } from "react";

import ProgressBar from "react-styled-clickable-progress-bar";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import CodeBlock from "./CodeBlock";
import { Box } from "rebass";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
  body {
    margin: 0px;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    background-color: #fafafa;
  }
`;

const Index = props => {
  const [input, updateInput] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/piotryordanov/react-styled-clickable-progress-bar/master/README.md"
      )
      .then(response => updateInput(response.data));
  }, []);
  return (
    <Box margin={"auto"} p={20} width={[1, 1, 1, 1 / 2]}>
      <Styles />
      <ProgressBar color="#4c4c4c" />
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />
    </Box>
  );
};

export default Index;
