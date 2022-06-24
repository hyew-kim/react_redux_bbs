import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {-webkit-text-size-adjust: none; text-size-adjust: none;}
    body {margin: 0;}
    h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p {margin: 0; padding: 0;}
    h1, h2, h3, h4, h5, h6 {font-weight: 700;}
    a {color: inherit; text-decoration: inherit;}
    ul > li {list-style: none;}
    img {vertical-align: middle; max-width: 100%;}
    address, em, i, cite {font-style: normal;}
    table {border-collapse: collapse;}
    table caption {overflow: hidden; width: 0; height: 0;}
    i[class^="fa"] {position: relative; display: inline-block; vertical-align: middle; overflow: hidden;}
    i[class^="fa"] span {position: absolute; left: -9999px;}
    .ir-hidden {position: absolute; left: -9999px;}
    .mobile {display: none !important;}
    br.only-m {content: '';}
`;

export default GlobalStyles;
