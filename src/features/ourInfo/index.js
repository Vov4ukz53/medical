import { Container } from "../../common/Container";
import { Content } from "./Content";
import { Section, Row, Column, Link } from "./styled";
import { ReactComponent as Location } from "./icons/location.svg";
import { ReactComponent as Phone } from "./icons/phone.svg";
import { ReactComponent as Email } from "./icons/email.svg";

export const OurInfo = () => (
  <Section>
    <Container>
      <Row>
        <Column graniteGray>
          <Content
            title="US Address"
            icon={<Location />}
            link={<Link
              target="blank"
              href="https://www.google.ru/maps/place/Wroc%C5%82aw+Market+Square/@51.1093564,17.0271469,16z/data=!4m5!3m4!1s0x470e40c57467f87b:0xe72be8d8d320d5d8!8m2!3d51.1103736!4d17.0310308"
              alt=""
            >41 Lehner Lane Suite 272
            </Link>}
          />
        </Column>
        <Column dimGray>
          <Content
            title="Call Us"
            icon={<Phone />}
            link={<Link href="tel:4445993441" alt="">444-599-3441</Link>}
          />
        </Column>
        <Column>
          <Content
            title="Write to Us"
            icon={<Email />}
            link={<Link href="mailto:sales@medpro.com" alt="">sales@medpro.com</Link>}
          />
        </Column>
      </Row>
    </Container>
  </Section>
);