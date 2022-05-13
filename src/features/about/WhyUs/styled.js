import styled from "styled-components";

export const Content = styled.div`
  margin: 55px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    margin: 40px 0px 0px 0px; 
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 20px 0px 0px 0px; 
  }
`;