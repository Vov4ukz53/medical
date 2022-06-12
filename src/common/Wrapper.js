import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px 0px 130px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    display: block;
    margin: 0px 0px 40px 0px;
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin: 0px 0px 20px 0px;
  };

  ${({ testimonails }) => testimonails && css`
    display: flex;
    margin: 0px;

    @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
      margin: 0px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      margin: 0px;
    };
  `}

  ${({ contuctUs }) => contuctUs && css`
    margin: 0px;
  `}
`;