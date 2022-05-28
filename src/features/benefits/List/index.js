import { list } from "./list";
import { StyledList, Item } from "./styled";

export const List = () => (
  <StyledList>
    {list.map((item, index) => {
      return <Item key={index}>{item}</Item>
    })}
  </StyledList>
);