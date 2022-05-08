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
      <Burger onClick={() => setOpen(!open)}>
        {
          open ? <StyledBurger /> : <CloseBurger />
        }
      </Burger>
    </>
  )
}