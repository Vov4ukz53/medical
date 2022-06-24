import { Title } from "../../../common/Title";
import Medical from "./medical.jpg";
import {
  ImageBody,
  Image,
  Paragraph
} from "./styled";

export const AboutUs = () => (
  <div id="aboutUs">
    <Title>About Us</Title>
    <ImageBody>
      <Image src={Medical} alt="" />
    </ImageBody>
    <Paragraph>
      I no longer miss work to go to the doctor. I no longer wait hours sitting in a doctors office just to see the doctor. In the past, after seeing the doctor, I now no longer have to wait at a pharmacy to get my prescriptions filled. I now get medical treatment and prescriptions without leaving the house. I get all of this and its just a click away. Not only a click away, but its also legal.
    </Paragraph>
    <Paragraph>
      Today’s online pharmacies has made it very convenient for people who already know what their diagnosis is, and already know what medications work for them.
    </Paragraph>
  </div>
);