import { Container } from "../../../common/Container"
import { CallUs } from "./CallUs";
import { Navigation } from "./Navigation";
import { Wrapper, Content, Link, LogoIcon } from "./styled";

export const HeaderBottom = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Link href="" alt="">
            <LogoIcon />
          </Link>
          <Navigation />
          <CallUs />
        </Content>
      </Container>
    </Wrapper>
  )
};