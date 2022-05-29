import styled from "styled-components";

export const StyledList = styled.ul`
  max-width: 480px;
  margin: 35px 0px 25px 0px;
  padding: 0px 20px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 20px 0px 20px 0px;
  }
`;

export const Item = styled.li`
  line-height: 29px;
`;