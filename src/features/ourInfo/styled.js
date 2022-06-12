import styled, { css } from "styled-components";

export const Section = styled.section`
  transform: translate(0%, 50%);

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    transform: translate(0%, 0%);
    margin: 0px 0px 30px 0px;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    display: block;
  }
`;

export const Column = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  padding: 16px;
  height: 196px;

  ${({ dimGray }) => dimGray && css`
    background: ${({ theme }) => theme.colors.dimGray};
  `}

  ${({ graniteGray }) => graniteGray && css`
    background: ${({ theme }) => theme.colors.graniteGray};
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    height: auto;
  }
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  margin: 0px 0px 0px 50px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin: 0px 0px 0px 20px;
  }
`;
