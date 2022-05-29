import styled from "styled-components";

export const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.spanishGray};
  margin: 8px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    font-size: 22px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 18px;
  }
`;