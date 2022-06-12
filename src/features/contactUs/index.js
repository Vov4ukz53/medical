import { Container } from "../../common/Container";
import { Wrapper } from "../../common/Wrapper";
import { Promises } from "./Promises";
import { Section } from "./styled";
import { Form } from "./Form";

export const ContactUs = () => (
  <Section>
    <Container>
      <Wrapper contuctUs>
        <Promises />
        <Form />
      </Wrapper>
    </Container>
  </Section>
);