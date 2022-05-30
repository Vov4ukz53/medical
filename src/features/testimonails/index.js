import { Wrapper } from "../../common/Wrapper";
import { Container } from "../../common/Container";
import { TitleBlock } from "../../common/TitlleBlock";
import {
  Section,
  Percents,
  Paragraph,
  Column,
  Title,
  Text,
  Author
} from "./styled";

export const Testimonails = () => (
  <Section>
    <Container>
      <Wrapper testimonails>
        <Column>
          <TitleBlock white
            title="Testimonials"
            subTitle="What people say?"
          />
          <Percents>90%</Percents>
          <Paragraph>First pass payment</Paragraph>
        </Column>
        <Column right>
          <Title>Increased revenues</Title>
          <Text>When most people think of laser eye surgery, they automatically think of LASIK. While it is true that LASIK is a type of laser eye surgery, there are a number of other laser procedures that can produce equally successful results
          </Text>
          <Author>Sam Andrews</Author>
        </Column>
      </Wrapper>
    </Container>
  </Section>
);