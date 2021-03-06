import GothamPro_Medium from "./assets/font/GothamPro-Medium.woff";
import GothamPro_Black from "./assets/font/GothamPro-Black.woff";
import GothamPro_Bold from "./assets/font/GothamPro-Bold.woff";
import GothamPro_Light from "./assets/font/GothamPro-Light.woff";
import {injectGlobal} from 'emotion';

injectGlobal`
  @font-face {
    font-family: "GothamPro-Medium";
    src: url('${GothamPro_Medium}') format('woff');
  }
  @font-face {
    font-family: "GothamPro-Black";
    src: url('${GothamPro_Black}') format('woff');
  }
  @font-face {
    font-family: "GothamPro-Bold";
    src: url('${GothamPro_Bold}') format('woff');
  }
  @font-face {
    font-family: "GothamPro-Light";
    src: url('${GothamPro_Light}') format('woff');
  }
`;

