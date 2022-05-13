import styled from "styled-components";

export const Body = styled.div`
  position: relative;
  z-index: 15;
  background: ${({ theme }) => theme.colors.celadonBlue};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

