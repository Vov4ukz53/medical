import styled from "styled-components";

export const Section = styled.section`
  margin: 125px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin: 40px 0px 0px 0px;
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 20px 0px 0px 0px;
  };
`;