import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  margin: 0px;
  text-decoration: none;
  transition: color .3s;

  &:hover{
    color: ${({ theme }) => theme.colors.darkTangerine}
  }
`;