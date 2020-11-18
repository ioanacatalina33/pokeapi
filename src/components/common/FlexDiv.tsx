import styled from "styled-components";
import {addFlexbox, addFlexWrap, alignItems} from "../../utils/CssUtils";

const FlexDiv = styled.div`
  width: 100%;
  ${addFlexbox()}${addFlexWrap("wrap")}${alignItems("center")}
`;

export default FlexDiv;
