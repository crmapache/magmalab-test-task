import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
  }
`
