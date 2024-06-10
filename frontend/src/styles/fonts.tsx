import { css } from 'styled-components';
import KimjungchulMyungjo from '../assets/fonts/KimjungchulMyungjo-Light.ttf'
import KimjungchulMyungjoBold from '../assets/fonts/KimjungchulMyungjo-Bold.ttf'
import SUIT from '../assets/fonts/SUIT-Regular.ttf'
import SUITBold from '../assets/fonts/SUIT-Bold.ttf'

export const fonts = css`
  @font-face {
    font-family: 'KimjungchulMyungjo';
    font-style: normal;
    src: url(${KimjungchulMyungjo});
  }
  @font-face {
    font-family: 'KimjungchulMyungjobold';
    font-style: normal;
    src: url(${KimjungchulMyungjoBold});
  }
  @font-face {
    font-family: 'SUIT';
    font-style: normal;
    src: url(${SUIT});
  }
  @font-face {
    font-family: 'SUITBold';
    font-style: normal;
    src: url(${SUITBold});
  }
`;