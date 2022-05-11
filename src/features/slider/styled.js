import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 647px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  padding: 0px 20px 0px 0px;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.eerieBlack};
  margin: 0px 0px 15px 0px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.eerieBlack};
  margin: 0px 0px 10px 0px;
`;

export const Info = styled.p`
  font-size: 32px;
  line-height: 42px;
  max-width: 580px;
  margin: 0px 0px 40px 0px;
`;

export const Link = styled.a`
  font-weight: 700;
  font-size: 24px;
  width: 284px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.carnelian};
  text-transform: uppercase;
  padding: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background .3s;

  &:hover{
    background: ${({ theme }) => theme.colors.carmine};
  }
`;
