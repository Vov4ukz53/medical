import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Asap', sans-serif;
    font-size: 16px;
  }
`;