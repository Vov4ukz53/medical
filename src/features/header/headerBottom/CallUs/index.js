import {
  Content,
  Link,
  MobileIcon,
  Title,
  Wrapper,
  Span
} from "./styled";


export const CallUs = () => (
  <Wrapper>
    <MobileIcon />
    <Content>
      <Title>Call Us</Title>
      <Link href="tel:3201112111" alt="">
        320- 111-2111
        <Span>(MED-PRO)</Span>
      </Link>
    </Content>
  </Wrapper>
);