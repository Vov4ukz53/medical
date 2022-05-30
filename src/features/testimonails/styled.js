import styled, { css } from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.celadonBlue};
  padding: 145px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    padding: 40px 0px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 20px 0px; 
  }
`;

export const Percents = styled.p`
  font-weight: 700;
  font-size: 64px;
  color: ${({ theme }) => theme.colors.white};
  margin: 90px 0px 5px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin: 40px 0px 5px 0px;
    font-size: 40px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 32px;
    margin: 20px 0px 5px 0px;
  }
`;

export const Paragraph = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin: 0px 0px 25px 0px;
    font-size: 24px;
  }
`;

export const Column = styled.div`
  flex: 0 0 33.333%;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    text-align: center;
  }

  ${({ right }) => right && css`
    flex: 1 1 66.666%;
    background: ${({ theme }) => theme.colors.white};
    padding: 35px 45px 30px 60px;

    @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
      padding: 30px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      padding: 20px
    }
  `}
`;

export const Title = styled.h4`
  font-size: 20px;
  margin: 0px 0px 15px 0px;
`;

export const Text = styled.p`
  line-height: 29px;
  margin: 0px 0px 40px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 0px 0px 15px 0px;
  }
`;


export const Author = styled.p`
  font-weight: 700;
  margin: 0px;
`;

