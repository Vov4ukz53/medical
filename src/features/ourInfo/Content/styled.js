import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin: 24px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin: 0px;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0px 0px 15px 50px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin: 0px 0px 10px 0px;
    font-size: 20px;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    justify-content: center;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    position: relative;
  }
`;