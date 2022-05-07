import styled from "styled-components";
import { ReactComponent as Mobile } from "./mobileIcon.svg";

export const Wrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  margin-left: 12px;
`;

export const Title = styled.h3`
  margin: -1px 0px 0px 0px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Span = styled.span`
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}){
    display: none;
  }
`;

export const MobileIcon = styled(Mobile)`

`;