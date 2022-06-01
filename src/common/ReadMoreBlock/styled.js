import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 35px 45px;
  background: ${({ theme }) => theme.colors.antiFlashWhite};

  ${({ profiles }) => profiles && css`
    background: none;
    padding: 25px 35px 0px 25px;
    margin-top: 40px; 
    
    @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
      margin-top: 0px;
    }
  `}

  ${({ contactUs }) => contactUs && css`
    padding: 0px;
    background: none;
  `}

  ${({ next }) => next && css`
    background: ${({ theme }) => theme.colors.cultured};
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    padding: 20px 25px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 10px;
  }
`;

export const TitleBody = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;

  ${({ profiles }) => profiles && css`
    padding: 0px 0px 35px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.spanishGray};

    @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
      padding: 0px 0px 15px 0px;
    }
  `}
`;

export const Content = styled.div`
  ${({ profiles }) => profiles && css`
    display: flex;
    margin-top: 30px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}){
      display: block;
    }
  `}
`;

export const Image = styled.img`
  ${({ profiles }) => profiles && css`
    flex: 0 0 160px;
    width: 160px;
    height: 160px;
    margin: 0px 20px 0px 0px;

    ${({ contactUs }) => contactUs && css`
      display: none;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      flex: 0 0 120px;
      width: 120px;
      height: 120px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}){
      margin: 0px 0px 20px 0px;
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
  `}
`;

export const Paragraph = styled.div`
  ${({ whyUs }) => whyUs && css`
    line-height: 25px;
    margin: 17px 0px 20px 0px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
      max-width: 500px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      margin: 0px 0px 15px 0px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}){
      margin: 0px 0px 5px 0px;
    }
  `}
`;
