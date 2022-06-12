import { Wrapper, Title, InfoContainer, Icon } from "./styled";

export const Content = ({ title, icon, link }) => (
  <Wrapper>
    <Title>{title}</Title>
    <InfoContainer>
      <Icon>{icon}</Icon>
      {link}
    </InfoContainer>
  </Wrapper>
);