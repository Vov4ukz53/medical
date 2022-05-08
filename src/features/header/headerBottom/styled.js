import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg"

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px;

  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    padding: 10px 0px;
  }
`;

export const Link = styled.a`
  display: flex;
  flex: 1 1 auto;

  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    flex: 0 0 50px;
  }
`;

export const LogoIcon = styled(Logo)`
  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    width: 50px;
    height: 50px;
  }
`;