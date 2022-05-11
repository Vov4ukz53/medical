import styled, { css } from "styled-components";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Twitter } from "./icons/twitter.svg";
import { ReactComponent as Linkedin } from "./icons/linkedin.svg";

export const Wrapper = styled.ul`
  display: inline-flex;
  margin: 0px;
  padding: 0px 20px 0px 0px;
`;

export const Item = styled.li`
  list-style: none;
  height: 16px;

  &:not(:last-child){
    margin-right: 21px;
  }

  ${({ big }) => big && css`
    &:not(:last-child){
      margin-right: 33px;
    }
  `}
`;

export const FacebookIcon = styled(Facebook)`
  transition: transform .3s;

  &:hover{
    transform: scale(1.2);
  } 
  
  ${({ big }) => big && css`
    width: 40px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      width: 25px;
      height: 25px;
    }
  `} 
`;

export const TwitterIcon = styled(Twitter)`
  transition: transform .3s;

  &:hover{
    transform: scale(1.2);
  }   

  ${({ big }) => big && css`
    width: 40px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      width: 25px;
      height: 25px;
    }
  `}       
`;

export const LinkedinkIcon = styled(Linkedin)`
  transition: transform .3s;

  &:hover{
    transform: scale(1.2);
  }    

  ${({ big }) => big && css`
    width: 40px;
    height: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      width: 25px;
      height: 25px;
    }
  `}    
`;