import {createGlobalStyle} from "styled-components";
import {colors, sizes} from "./utils/cssUtils";
import img from "./img/bgimg.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.colorText};
    font-size: ${sizes.fontSize};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left bottom;
    background-attachment: fixed;
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
