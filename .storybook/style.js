import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: Soleil;
    src: url("public/fonts/soleil.woff2") format("woff2"),
         url("public/fonts/soleil.woff") format("woff"),
         url("public/fonts/soleil.otf") format("opentype");
    font-display: swap;
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: Soleil;
    src: url("public/fonts/soleil-bold.woff2") format("woff2"),
         url("public/fonts/soleil-bold.woff") format("woff"),
         url("public/fonts/soleil-bold.otf") format("opentype");
    font-display: swap;
    font-style: normal;
    font-weight: 600;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
    font-family: Soleil, Arial, Helvetica, sans-serif;
  }
  button, input, optgroup, select, textarea {
    font-family: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  } 
`;
