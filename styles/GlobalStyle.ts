import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto sans-serif, Noto Sans KR;
  }
`;

export default GlobalStyle;
