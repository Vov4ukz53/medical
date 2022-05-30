import styled from "styled-components";

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.celadonBlue};
  margin: 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    font-size: 20px;
  }
`;