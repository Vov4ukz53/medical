import { useState } from "react";
import { Paragraph, TitleBody, Wrapper } from "./styled";
import { SubTitle } from "../../../../common/SubTitle";
import { ButtonReadMore } from "../../../../common/ButtonReadMore";

export const Block = ({ title, icon, text, textMore, next }) => {
  const [more, setMore] = useState(false);

  const readMore = () => setMore(!more);

  return (
    <Wrapper next={next}>
      <TitleBody>
        <SubTitle>{title}</SubTitle>
        {icon}
      </TitleBody>
      <Paragraph>
        {text}
        <span>{more ? textMore : `…`}</span>
      </Paragraph>
      <ButtonReadMore onClick={readMore}>
        {!more ? "read more" : "read less"}
      </ButtonReadMore>
    </Wrapper>
  )
};