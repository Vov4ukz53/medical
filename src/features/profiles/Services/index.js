import { ReadMoreBlock } from "../../../common/ReadMoreBlock";
import { TitleBlock } from "../../../common/TitlleBlock";
import Image1 from "./image1.jpg";
import { Icon, IconClose } from "./styled";

export const Services = () => {
  return (
    <div>
      <TitleBlock
        title="Our Services"
        subTitle="Our staff extension services include"
      />
      <ReadMoreBlock profiles whyUs
        title="Coding Services"
        icon={<Icon />}
        iconClose={<IconClose />}
        image={Image1}
        text="We offer high quality coding and auditing services to hospitals and physicians; services extended for Anesthesia, Radiology, E&M and Surgery coding."
        textMore="Services extended for Anesthesia, Radiology, E&M and Surgery coding."
      />
      <ReadMoreBlock profiles whyUs
        title="Credentialing"
        icon={<Icon />}
        iconClose={<IconClose />}
        image={Image1}
        text="We offer high quality coding and auditing services to hospitals and physicians; services extended for Anesthesia, Radiology, E&M and Surgery coding."
        textMore="Services extended for Anesthesia, Radiology, E&M and Surgery coding."
      />
      <ReadMoreBlock profiles whyUs
        title="HCC Maangement Services"
        icon={<Icon />}
        iconClose={<IconClose />}
        image={Image1}
        text="We offer high quality coding and auditing services to hospitals and physicians; services extended for Anesthesia, Radiology, E&M and Surgery coding."
        textMore="Services extended for Anesthesia, Radiology, E&M and Surgery coding."
      />
    </div>
  )
};