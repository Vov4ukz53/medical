import styled from "styled-components";

export const ImageBody = styled.div`
  position: relative;
  margin: 55px 0px 35px 0px;
  padding-bottom: 63.42%;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    margin: 40px 0px 20px 0px; 
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 20px 0px 20px 0px; 
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Paragraph = styled.p`
  line-height: 29px;
  margin: 0px;

  &:not(:last-child){
    margin: 0px 0px 20px 0px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    &:last-child{
      margin: 0px 0px 30px 0px;
    }
  }
`;
