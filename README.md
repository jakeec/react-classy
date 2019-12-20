# react-classy

Simple library in the same vein as styled-components but for className

## Installation

```bash
npm i react-classy
```

## Usage

### Basic usage

```jsx
import classy from "react-classy";

const MyDiv = classy.div`
    flex-container
    mb--sm
    ta--center
    bg--blue
`;

const MyHeader = classy.h1`
    fw--bold
    fs--lg
    ts--black--sm
`;

const MyComponent = () => {
  return (
    <MyDiv>
      <MyHeader>Hello!</MyHeader>
    </MyDiv>
  );
};
```

### Conditional classes

```jsx
import classy from "react-classy";

const MyDiv = classy.div`
    flex-container
    mb--sm
    ta--center
    bg--blue
    ${props => (props.rounded ? "br--md" : "")}
`;

const MySquaredDiv = () => {
  /* this MyDiv component does not receive the 'rounded' prop (equivalent to doing rounded={false})
   so the border-radius class br--md is not applied */
  return <MyDiv />;
};

const MyRoundedDiv = () => {
  /* this MyDiv component does receive the 'rounded' prop (shorthand for rounded={true})
    so the border-radius class is applied */
  return <MyDiv rounded />;
};
```
