import { createGlobalStyle }  from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --backgroundColor1: #090909;
    --backgroundColor2: #090909;
    --textColor1: #FAFAFA;
    --textColor2: #C6C6C6;
    --blue: #00B6F3;
    --border: #232323;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--backgroundColor1);
    color: var(--textColor1);

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;

    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
