import { menuList } from "./menuList";
import { Item, Wrapper, Link } from "./styled";

export const Navigation = () => (
  <nav>
    <Wrapper>
      {
        menuList.map((item, index) => {
          return (
            <Item key={index}>
              <Link href="" alt="">
                {item}
              </Link>
            </Item>
          )
        })
      }
    </Wrapper>
  </nav>
); 