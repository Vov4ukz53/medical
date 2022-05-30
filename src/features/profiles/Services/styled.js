import styled from "styled-components";
import { AiOutlineMinus } from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";


export const Wrapper = styled.div`
  @media(max-width: ${({ theme }) => theme.breakpoints.desktops}){
    margin-bottom: 10px;
  }
`;

export const Icon = styled(AiOutlineMinus)`
  width: 20px;
  cursor: pointer;
`;

export const IconClose = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
`;