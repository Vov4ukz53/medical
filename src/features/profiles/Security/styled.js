import styled from "styled-components";
import SecurityImage from "./securityImage.jpg";

export const Wrapper = styled.div`
  margin: 0px 0px 0px 65px;

  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    margin: 0px;
  }
`;

export const Image = styled.div`
  padding-bottom: 62.5%;
  margin: 45px 0px 0px 0px;
  background: url(${SecurityImage}) 0 0 no-repeat;

  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    padding: 0px;
    max-width: 100%;
    height: 323px;
    margin: 25px 0px 0px 0px;
  }

  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    height: 250px;
  }
`;

export const Paragraph = styled.p`
  line-height: 29px;
  margin: 45px 0px 35px 0px;
  max-width: 475px;

  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    margin: 25px 0px 15px 0px;
  }
`;