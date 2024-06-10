import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts'; // fonts 파일을 불러온다.

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ${fonts} // 

  div, p, span {
    font-family: 'KimjungchulMyungjo';
  }
`;

export default GlobalStyle;