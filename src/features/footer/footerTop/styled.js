import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 208px 0px 127px 0px;
  background: ${({ theme }) => theme.colors.quartz};
`;

export const Content = styled.div`
  display: grid;
  wrap: wrap;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0px 0px 45px 0px;
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 29px;
  padding-right: 40px;
  margin: 0px;
  max-width: 350px;
`;

export const Block = styled.div`
  margin-left: 60px;
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

  &:hover{
    color: ${({ theme }) => theme.colors.darkTangerine}
  }
`;





