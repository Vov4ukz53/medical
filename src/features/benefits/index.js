import { Popup } from "../../common/Popup";
import { TitleBlock } from "../../common/TitlleBlock";
import { List } from "./List";
import { Modal } from "./Modal";
import { Section } from "../../common/Section";
import { Column, Content, Item } from "./styled";

export const Benefits = () => (
  <Section>
    <Column>
      <Content>
        <Item>For Physicians and Group Practice:</Item>
        <Item blue>For Medical Billing Companies/Hospitals:</Item>
        <Item blue>You Stay in Control:</Item>
      </Content>
    </Column>
    <Column right>
      <TitleBlock
        title="Benefits"
        subTitle="For Physicians and Group Practice"
      />
      <List />
      <Popup
        button="read more"
        content={<Modal />}
      />
    </Column>
  </Section>
);