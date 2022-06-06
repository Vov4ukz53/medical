import { ReadMoreBlock } from "../../../common/ReadMoreBlock";
import { TitleBlock } from "../../../common/TitlleBlock";
import { Wrapper, Item, Paragraph } from "./styled";

export const Promises = () => (
  <Wrapper>
    <Item first>
      <TitleBlock
        title="For Physicians"
        subTitle="Our Promise"
      />
      <ReadMoreBlock contactUs
        text={
          <>
            <Paragraph>90% First Pass payment within 30 days </Paragraph>
            <Paragraph>@up to 3% of collected revenue</Paragraph>
            <Paragraph>Free Credentialing and Re-credentialing</Paragraph>
          </>
        }
        textMore={
          <Paragraph>Free Credentialing and Re-credentialing</Paragraph>
        }
      />
    </Item>
    <Item>
      <TitleBlock
        title="For Hospitals/Medical Billing Companies"
        subTitle="Our Promise"
      />
      <ReadMoreBlock contactUs
        text={
          <>
            <Paragraph>Increase in revenue by 15%</Paragraph>
            <Paragraph>Decrease in costs by 40%</Paragraph>
            <Paragraph>Accelerated cash flows with effective management of denials.</Paragraph>
          </>
        }
        textMore={
          <Paragraph>Accelerated cash flows with effective management of denials.</Paragraph>
        }
      />
    </Item>
  </Wrapper>
);