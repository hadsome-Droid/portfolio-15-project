import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.dark.fontPrimary};
  }


  a {
    text-decoration: none;
    color: ${theme.colors.dark.fontPrimary};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  h3 {
    font-size: 32px;
    font-weight: 600;
    line-height: 136%;
    color: ${theme.colors.dark.fontPrimary};
  }

  section {
    background-color: ${theme.colors.dark.primaryBg};
  }


`