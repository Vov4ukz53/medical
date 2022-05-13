import styled from "styled-components";

export const StyledHeader = styled.header`
  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    position: fixed;
    height: 100px;
    width: 100%;
    z-index: 20;
  }
`;