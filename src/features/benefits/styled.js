import styled, { css } from "styled-components";
import Background from "./background.jpg";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Column = styled.div`
  background: url(${Background}) 0 0 no-repeat;
  background-size: cover;
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 87px 0px;
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
`;