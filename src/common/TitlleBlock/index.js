import { Title } from "../Title";
import { SubTitle } from "./styled";

export const TitleBlock = ({ title, subTitle }) => (
  <>
    <Title >{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </>
);