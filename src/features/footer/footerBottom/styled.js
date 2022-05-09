import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({theme})=> theme.colors.jet};
`;

export const Copyright = styled.p`
  color: ${({theme})=> theme.colors.white};
  padding: 45px 0px;
  margin: 0px;
`;