import { Container } from "../../common/Container";
import { Wrapper } from "../../common/Wrapper";
import { Security } from "./Security";
import { Services } from "./Services";

export const Profiles = () => (
  <section>
    <Container>
      <Wrapper>
        <Services />
        <Security />
      </Wrapper>
    </Container>
  </section>
);