import { Title } from "../Title";
import { SubTitle } from "./styled";

export const TitleBlock = ({ title, subTitle, white }) => (
  <>
    <Title white={white}>
      {title}
    </Title>
    <SubTitle white={white}>
      {subTitle}
    </SubTitle>
  </>
);