import { Link } from "../../common/Link";
import { TitleBlock } from "../../common/TitlleBlock";
import { List } from "./List";
import { Column, Content, Item, Section } from "./styled";

export const Benefits = () => {

  return (
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
        <Link name="read more" />
      </Column>
    </Section>
  )
};