import { menuList } from "./menuList";
import { Item, Wrapper, Link, Burger } from "./styled";
import { StyledBurger, CloseBurger } from "./styled";
import { useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <Wrapper open={open}>
          {
            menuList.map((item, index) => {
              return (
                <Item
                  key={index}
                  onClick={() => setOpen(!open)}
                >
                  <Link href={item.href} alt="">
                    {item.title}
                  </Link>
                </Item>
              )
            })
          }
        </Wrapper>
      </nav>
      <Burger onClick={() => setOpen(!open)}>
        {
          open ? <CloseBurger /> : <StyledBurger />
        }
      </Burger>
    </>
  )
};