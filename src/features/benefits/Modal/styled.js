import styled from "styled-components";

export const StyledList = styled.ul`
  margin: 0px;
  padding: 0px 35px 0px 20px;
`;

export const Item = styled.li`
  &:not(:last-child){
    margin-bottom: 10px;
  }
`;