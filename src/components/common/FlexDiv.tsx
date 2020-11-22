import styled from "styled-components";
import {addFlexbox, addFlexWrap, alignItems} from "../../utils/cssUtils";

const FlexDiv = styled.div`
  ${addFlexbox()}${addFlexWrap("wrap")}${alignItems("center")}
`;

export default FlexDiv;
