import { Title } from "../../../common/Title";
import { Block } from "./Block";
import { Content } from "./styled";
import { ReactComponent as Icon1 } from "./icons/icon1.svg";
import { ReactComponent as Icon2 } from "./icons/icon2.svg";
import { ReactComponent as Icon3 } from "./icons/icon3.svg";

export const WhyUs = () => (
  <div>
    <Title>Why Us?</Title>
    <Content>
      <Block
        title="Dependable"
        icon={<Icon1 />}
        text="Our skilled and trustworthy teams ensure process continuity and maintain high standards of quality"
        textMore=" and trustworthy teams ensure process continuity."
      />
      <Block next
        title={"Open"}
        icon={<Icon2 />}
        text="You are assured of transparency and openness in our staffing, workflows and communication protocol."
        textMore=" You are assured of transparency and openness in our staffing."
      />
      <Block
        title="Connected"
        icon={<Icon3 />}
        text="There is never a time when some one will not be in touch with you! There is never a time"
        textMore=" when some one will not be in touch with you!"
      />
    </Content>
  </div>
);