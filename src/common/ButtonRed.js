import styled, { css } from "styled-components";

export const ButtonRed = styled.button`
  cursor: pointer;
  width: 105px;
  font-size: 12px;
  font-weight: 700;
  border: none;
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

  ${({ right }) => right && css`
    margin-left: auto;
  `}
`;