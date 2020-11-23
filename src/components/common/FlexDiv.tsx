import styled from "styled-components";
import {addFlexbox, addFlexWrap, alignItems, justifyContent} from "../../utils/cssUtils";

const FlexDiv = styled.div`
  ${addFlexbox()}${addFlexWrap("wrap")}${alignItems("center")}${justifyContent("center")}
`;

export default FlexDiv;
