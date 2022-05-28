import styled from "styled-components";

export const StyledLink = styled.a`
  width: 105px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 105px;
  padding: 13px 0px;
  background: ${({ theme }) => theme.colors.carnelian};
  transition: background .3s;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  &:hover{
    background: ${({ theme }) => theme.colors.carmine};
  }
`;