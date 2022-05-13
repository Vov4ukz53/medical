import { StyledHeader } from "./styled";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

export const Header = () => (
  <StyledHeader>
    <HeaderTop />
    <HeaderBottom />
  </StyledHeader>
);