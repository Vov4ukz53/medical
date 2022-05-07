import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  margin: 0px 58px 0px 0px;
  padding: 0px;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child){
    margin-right: 21px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  transition: font-weight .3s;
  font-size: 14px;

  &:hover{
    font-weight: 700;
  }
`;