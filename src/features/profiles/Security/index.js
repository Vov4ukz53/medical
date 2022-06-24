import { Popup } from "../../../common/Popup";
import { TitleBlock } from "../../../common/TitlleBlock";
import { Wrapper, Image, Paragraph } from "./styled";
import { Modal } from "./Modal";

export const Security = () => {
  return (
    <Wrapper id="security">
      <TitleBlock
        title="Security"
        subTitle="POLI Compliance"
      />
      <Image />
      <Paragraph>
        We work with you to develop customized risk-management solutions covering information security, business continuity and privacy regulations.
      </Paragraph>
      <Popup
        button="read more"
        content={<Modal />}
      />
    </Wrapper>
  )
};