import {createGlobalStyle} from "styled-components";
import {colors, sizes} from "./utils/cssUtils";
import img from "./img/bgpoke.png";

const backgroundImageWithGradient = `
background: url(${img}), -moz-linear-gradient(top, rgba(243,130,0,1) 0%, rgba(255,207,23,1) 82%));
background: url(${img}), -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(243,130,0,1)), color-stop(82%, rgba(255,207,23,1)));
background: url(${img}), -webkit-linear-gradient(top, rgba(243,130,0,1) 0%, rgba(255,207,23,1) 82%));
background: url(${img}), -o-linear-gradient(top, rgba(243,130,0,1) 0%, rgba(255,207,23,1) 82%));
background: url(${img}), -ms-linear-gradient(top, rgba(243,130,0,1) 0%, rgba(255,207,23,1) 82%));
background: url(${img}), linear-gradient(to top, rgba(243,130,0,1) 0%, rgba(255,207,23,1) 82%));
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.colorText};
    font-size: ${sizes.fontSize};
    ${backgroundImageWithGradient}
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: left bottom;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     margin-bottom: 0px;
  }
  
}

`;

export default GlobalStyle;
