import { useState } from "react";
import { Paragraph, TitleBody, Wrapper, Content, Image } from "./styled";
import { SubTitle } from "../SubTitle";
import { ButtonReadMore } from "../ButtonReadMore";

export const ReadMoreBlock = ({
  title,
  icon,
  iconClose,
  text,
  textMore,
  next,
  profiles,
  image,
  whyUs,
  contactUs }) => {
  const [more, setMore] = useState(false);
  const [open, setOpen] = useState(false);

  const openMore = () => setOpen(!open);
  const readMore = () => setMore(!more);

  return (
    <Wrapper
      next={next}
      profiles={profiles}
      contactUs={contactUs}
    >
      <TitleBody
        profiles={profiles}
        onClick={openMore}
      >
        <SubTitle>{title}</SubTitle>
        {open ? icon : iconClose}
      </TitleBody>
      {
        ((whyUs && profiles && open) || (whyUs && !profiles) || contactUs) &&
        <Content profiles={profiles}>
          <Image
            profiles={profiles}
            contactUs={contactUs}
            src={image}
            alt=""
          />
          <div>
            <Paragraph whyUs={whyUs}>
              {text}
              <span>{more ? textMore : `…`}</span>
            </Paragraph>
            <ButtonReadMore onClick={readMore}>
              {!more ? "read more" : "read less"}
            </ButtonReadMore>
          </div>
        </Content>
      }
    </Wrapper>
  )
};