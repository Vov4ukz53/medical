import styled, { css } from "styled-components";

export const Wrapper = styled.div`

`;

export const Item = styled.div`
  margin: 0px 0px 30px 0px;

  ${({ first }) => first && css`
    margin-top: 50px;
  `}

  @media(max-width: ${({theme})=> theme.breakpoints.desktops}){
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  margin: 0px 0px 15px 0px;
`;