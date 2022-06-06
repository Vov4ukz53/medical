import { Title } from "../../../common/Title";
import { ButtonRed } from "../../../common/ButtonRed";
import { Wrapper, StyledForm, Input } from "./styled";

export const Form = () => (
  <Wrapper>
    <Title>Appointment Form</Title>
    <StyledForm>
      <Input name="name" type="text" required placeholder="First Name*" />
      <Input name="lastName" type="text" required placeholder="Last Name*" />
      <Input name="email" type="email" required placeholder="Email Address*" />
      <Input name="company" type="text" placeholder="Company" />
      <ButtonRed right>Send</ButtonRed>
    </StyledForm>
  </Wrapper>
); 