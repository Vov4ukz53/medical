import { Container } from "../../common/Container";
import { AboutUs } from "./AboutUs";
import { Wrapper } from "./styled";
import { WhyUs } from "./WhyUs";

export const About = () => (
  <Container>
    <Wrapper>
      <AboutUs />
      <WhyUs />
    </Wrapper>
  </Container>
);