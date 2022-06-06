import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px 0px 0px 120px;
  padding: 50px 45px;
  background: ${({ theme }) => theme.colors.cultured};
`;

export const StyledForm = styled.form`
  margin: 45px 0px 0px 0px;
`;

export const Input = styled.input`
  display: block;
  padding: 0px 15px;
  border: 2px solid ${({ theme }) => theme.colors.platinum};
  width: 100%;
  height: 53px;
  
  &:not(:last-child){
    margin: 0px 0px 37px 0px;
  }
`;