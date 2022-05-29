import { Container } from "../../common/Container";
import { Section } from "../../common/Section";
import { Security } from "./Security";
import { Services } from "./Services";

export const Profiles = () => {

  return (
    <Container>
      <Section>
        <Services />
        <Security />
      </Section>
    </Container>
  )
};