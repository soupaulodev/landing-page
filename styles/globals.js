import { createGlobalStyle }  from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --backgroundColor1: #343434;
    --backgroundColor2: #222222;
    --textColor1: #FAFAFA;
    --textColor2: #C6C6C6;
    --blue: #00B6F3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;