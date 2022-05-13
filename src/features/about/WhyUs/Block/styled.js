import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 35px 45px;
  background: ${({ theme }) => theme.colors.antiFlashWhite};

  ${({next})=> next && css`
    background: ${({ theme }) => theme.colors.cultured};
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    padding: 20px 25px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 15px;
  }
`;

export const TitleBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
`;

export const Paragraph = styled.p`
  line-height: 25px;
  margin: 17px 0px 20px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    max-width: 500px;
  }
`;
