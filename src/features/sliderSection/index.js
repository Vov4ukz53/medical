import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settings";
import { sliderList } from "./sliderList";
import {
  Image,
  Content,
  SubTitle,
  Title,
  Info,
  Link,
  Section
} from "./styled";

export const SliderSection = () => (
  <Section id="slider">
    <Slider {...settings}>
      {sliderList.map((item, index) => {
        return (
          <div key={index}>
            <Image src={item.image} alt="" />
            <Content>
              <SubTitle>{item.subTitle}</SubTitle>
              <Title>{item.title}</Title>
              <Info>
                {item.info}
              </Info>
              <Link href="http://google.com" alt="">
                {item.linkText}
              </Link>
            </Content>
          </div>
        )
      })}
    </Slider>
  </Section>
);