import styled, { css } from "styled-components";
import Background from "./background.jpg";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    display: block;
  };
`;

export const Column = styled.div`
  background: url(${Background}) 0 0 no-repeat;
  background-size: cover;

  ${({ right }) => right && css`
    background: none;
    padding: 77px 0px 0px 0px;
    margin: 0px 0px 0px 65px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
      padding: 20px 0px 20px 0px;
      margin: 0px 0px 0px 45px;
    }
  `}
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 87px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    padding: 40px 0px;
  }
`;

export const Item = styled.li`
  align-self: flex-end;
  padding: 35px;
  width: 475px;
  background: ${({ theme }) => theme.colors.whiteOpacity};
  list-style: none;
  font-weight: 700;
  font-size: 22px;

  &:not(:last-child){
    margin: 0px 0px 21px 0px;
  }

  ${({ blue }) => blue && css`
    background: ${({ theme }) => theme.colors.celadonBlueOpacity};
    color: ${({ theme }) => theme.colors.white};
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    padding: 25px;
    width: 400px;
    font-size: 18px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    align-self: flex-start;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    width: 100%;
    font-size: 16px;
    padding: 15px;
  }
`;