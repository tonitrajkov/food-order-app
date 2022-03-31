import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      height: 100vh;
      text-rendering: optimizeLegibility;
    }
  `;