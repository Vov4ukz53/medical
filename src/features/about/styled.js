import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 65.5% 1fr;
  grid-gap: 50px;
  margin: 0px 0px 135px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    display: block;
    margin: 0px 0px 40px 0px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 0px 0px 20px 0px; 
  }
`;