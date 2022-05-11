import {
  Wrapper,
  Image,
  Content,
  SubTitle,
  Title,
  Info,
  Link
} from "./styled"
import Background from "./background.jpg";

export const Slider = () => {

  return (
    <Wrapper>
      <Image src={Background} />
      <Content>
        <SubTitle>For Physicians</SubTitle>
        <Title>Our Promise</Title>
        <Info>
          90% First Pass payment within 30 days @up to 3% of collected revenue.
        </Info>
        <Link href="http://google.com" alt="">
          REACH US
        </Link>
      </Content>
    </Wrapper>
  )
};