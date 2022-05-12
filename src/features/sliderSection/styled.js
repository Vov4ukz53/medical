import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative; 
`;

export const Image = styled.img`
  width: 100%;
  height: 600px; 
  object-fit: cover;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    height: 400px; 
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  padding: 0px 20px 0px 0px;
  text-shadow: 2px 2px 4px ${({ theme }) => theme.colors.black};

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    top: 15%;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    text-shadow: 2px 2px 7px ${({ theme }) => theme.colors.black};
    left: 10%;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.eerieBlack};
  margin: 0px 0px 15px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.eerieBlack};
  margin: 0px 0px 10px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    font-size: 30px;
  }
`;

export const Info = styled.p`
  font-size: 32px;
  line-height: 42px;
  max-width: 580px;
  margin: 0px 0px 40px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    font-size: 24px;
    padding-right: 20px;
    margin: 0px 0px 20px 0px;
    line-height: 30px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    max-width: 400px;
    padding-right: 20px;
  }
`;

export const Link = styled.a`
  font-weight: 700;
  font-size: 24px;
  width: 284px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.carnelian};
  text-transform: uppercase;
  padding: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background .3s;
  text-shadow: none;

  &:hover{
    background: ${({ theme }) => theme.colors.carmine};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    padding: 15px 0px;
    width: 200px;
    font-size: 22px;
  }
`;
