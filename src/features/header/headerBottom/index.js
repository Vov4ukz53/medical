import { Container } from "../../../common/Container"
import { CallUs } from "./CallUs";
import { Navigation } from "./Navigation";
import { Content, Link, LogoIcon } from "./styled";

export const HeaderBottom = () => {
  return (
    <Container>
      <Content>
        <Link href="" alt="">
          <LogoIcon />
        </Link>
        <Navigation />
        <CallUs />
      </Content>
    </Container>
  )
};