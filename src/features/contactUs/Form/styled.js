import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px 0px 0px 120px;
  padding: 50px 45px;
  background: ${({ theme }) => theme.colors.cultured};

  @media(max-width: ${({ theme }) => theme.breakpoints.extraLarge}){
    margin: 0px 0px 0px 40px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 0px;
    padding: 20px;
  }
`;

export const StyledForm = styled.form`
  margin: 45px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 0px 15px;
  border: 2px solid ${({ theme }) => theme.colors.platinum};
  width: 100%;
  height: 53px;
  
  &:not(:last-child){
    margin: 0px 0px 37px 0px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      margin: 0px 0px 15px 0px;
    }
  }
`;