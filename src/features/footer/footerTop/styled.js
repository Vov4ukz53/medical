import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 208px 0px 127px 0px;
  background: ${({ theme }) => theme.colors.quartz};

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    padding: 40px 0px 30px 0px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 30px 0px 20px 0px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    grid-template-columns: 1fr;
    grid-gap: 30px;
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0px 0px 45px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 16px;
    margin: 0px 0px 15px 0px;
  }
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 29px;
  padding-right: 40px;
  margin: 0px;
  max-width: 350px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 0 auto;
    padding-right: 0px;
    font-size: 14px;
  }
`;

export const Block = styled.div`
  margin-left: 60px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin-left: 0px;
  }
`;

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  list-style: none;
  margin-bottom: 5px;
  line-height: 29px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: color .3s;
  font-size: 14px;

  &:hover{
    color: ${({ theme }) => theme.colors.darkTangerine};
  }
`;





