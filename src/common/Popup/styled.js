import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai"

export const Button = styled.button`
  cursor: pointer;
  width: 105px;
  font-size: 12px;
  font-weight: 700;
  border: none;
  display: flex;
  justify-content: center;
  width: 105px;
  padding: 13px 0px;
  background: ${({ theme }) => theme.colors.carnelian};
  transition: background .3s;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  &:hover{
    background: ${({ theme }) => theme.colors.carmine};
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.opacityBlack};
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  max-width: 800px;
  max-height: 500px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 10;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    max-height: 400px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    max-height: 300px;
  }
`;

export const CloseModalButton = styled(AiOutlineClose)`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;