import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({theme})=> theme.colors.jet};
`;

export const Copyright = styled.p`
  color: ${({theme})=> theme.colors.white};
  padding: 45px 0px;
  margin: 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    padding: 30px 0px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 20px 0px;
  }
`;