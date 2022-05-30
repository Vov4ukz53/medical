import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  margin: 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    font-size: 30px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 24px;
  }

  ${({ white }) => white && css`
    color: ${({ theme }) => theme.colors.white};
  `}
`;