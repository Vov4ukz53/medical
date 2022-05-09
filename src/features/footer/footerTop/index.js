import { Container } from "../../../common/Container";
import { links } from "./links";
import { SocialNetworks } from "../../../common/SocialNetworks"
import {
  Wrapper,
  Content,
  Title,
  Body,
  Link,
  Item,
  List,
  Block
} from "./styled";

export const Footertop = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <div>
            <Title>About MedPro</Title>
            <Body>
              According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle.
            </Body>
          </div>
          <Block>
            <Title>Quick Links</Title>
            <List>
              {links.map((item, index) => (
                <Item key={index}>
                  <Link href="" alt="">
                    {item}
                  </Link>
                </Item>
              ))}
            </List>
          </Block>
          <Block>
            <Title>Stay Connected</Title>
            <SocialNetworks footerTop/>
          </Block>
        </Content>
      </Container>
    </Wrapper>
  )
};