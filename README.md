# react-styled-clickable-progress-bar

React component that creates a fixed, clickable, progress bar.
It is built using React `hooks`.

Click on anywhere on the progress bar to automatically scroll the page.

# Install

> yarn add react-styled-clickable-progress-bar
> npm install react-styled-clickable-progress-bar

# Usage


## Default Progress Bar

```
import React from "react";
import ProgressBar from "react-styled-clickable-progress-bar";

const Index = props => <ProgressBar />

export default Index;
```

## Customize with styled-components

```
import React from "react";
import styled from 'styled-components'
import ProgressBar from "react-styled-clickable-progress-bar";

const Scroll = styled(ProgressBar)`
  top: 40px;
`

const Index = props => <Scroll />

export default Index;
```

## Custom Settings

```
import React from "react";
import ProgressBar from "react-styled-clickable-progress-bar";

const Index = props => <Scroll top={"40px"}/>

export default Index;
```


## Configuration

```
<ProgressBar
  top="0px"
  left="0px"
  height="5px"
  color="black"
>
```
