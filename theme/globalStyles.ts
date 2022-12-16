import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Strawford';
  src: url('fonts/Strawford-Regular.otf') format('otf');
}
  body {
    background: ${({ theme }) => theme.defaultBG};
    color: ${({ theme }) => theme.default.color};
    font-family: Strawford,sans-serif;
    transition: all 0.50s linear;
  }
  `;
