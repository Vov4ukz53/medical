import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai"

export const Wrapper = styled.ul`
  display: flex;
  margin: 0px 58px 0px 0px;
  padding: 0px;
  list-style: none;
  transition: transform .3s;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    display: block;
    position: absolute;
    top: 40px;
    left: 0px;
    width: 100%;
    transform: ${({ open }) => open ? "translatey(0%)" : "translatey(-150%)"};
    text-align: center;
    padding: 20px;
    overflow: auto;
    background: ${({theme})=> theme.colors.celadonBlueOpacity};
    border-top: 1px solid ${({theme})=> theme.colors.white};
  }
`;

export const Item = styled.li`
  &:not(:last-child){
    margin-right: 21px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin-bottom: 10px;
    color: ${({theme})=> theme.colors.white};

    &:not(:last-child){
      margin-right: 0px;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  transition: font-weight .3s;
  font-size: 14px;

  &:hover{
    font-weight: 700;
  }
`;

export const Burger = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  display: none;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    display: block;
  }
`;

export const StyledBurger = styled(AiOutlineMenu)`
  width: 20px;
  height: 20px;
`;

export const CloseBurger = styled(AiOutlineClose)`
  color: ${({theme})=> theme.colors.white};
  width: 20px;
  height: 20px;
`;