# react-styled-clickable-progress-bar

React component that creates a fixed, clickable, progress bar.
It is built using React `hooks`.

Click on anywhere on the progress bar to automatically scroll the page.

# Install

```npm
yarn add react-styled-clickable-progress-bar
```
```npm
npm install react-styled-clickable-progress-bar
```

# Usage


## Default Progress Bar

```jsx
import React from "react";
import ProgressBar from "react-styled-clickable-progress-bar";

const Index = props => <ProgressBar />

export default Index;
```

## Customize with styled-components

```jsx
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

```jsx
import React from "react";
import ProgressBar from "react-styled-clickable-progress-bar";

const Index = props => <Scroll top={"40px"}/>

export default Index;
```


## Configuration

```jsx
<ProgressBar
  top="0px"
  left="0px"
  height="5px"
  color="black"
>
```
