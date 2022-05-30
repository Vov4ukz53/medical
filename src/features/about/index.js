import { Container } from "../../common/Container";
import { AboutUs } from "./AboutUs";
import { Body } from "./styled";
import { WhyUs } from "./WhyUs";

export const About = () => (
  <section>
    <Container>
      <Body>
        <AboutUs />
        <WhyUs />
      </Body>
    </Container>
  </section>
);