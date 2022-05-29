import styled from "styled-components";
import SecurityImage from "./securityImage.jpg";

export const Wrapper = styled.div`
  margin: 0px 0px 0px 65px;
`;

export const Image = styled.div`
  padding-bottom: 62.5%;
  margin: 45px 0px 0px 0px;
  background: url(${SecurityImage}) 0 0 no-repeat;
`;

export const Paragraph = styled.p`
  line-height: 29px;
  margin: 55px 0px 45px 0px;
  max-width: 475px;
`;