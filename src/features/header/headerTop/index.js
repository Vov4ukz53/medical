import { Body, Content } from "./styled";
import { Container } from "../../../common/Container";
import { SocialNetworks } from "../../../common/SocialNetworks";
import { Email } from "../../../common/Email";

export const HeaderTop = () => {

  return (
    <Body>
      <Container>
        <Content>
          <SocialNetworks />
          <Email />
        </Content>
      </Container>
    </Body>
  )
};