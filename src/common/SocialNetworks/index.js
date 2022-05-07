import {
  FacebookIcon,
  TwitterIcon,
  LinkedinkIcon,
  Wrapper,
  Item,
} from "./styled";

export const SocialNetworks = () => {
  const socialNetworksList = [
    <FacebookIcon />,
    <TwitterIcon />,
    <LinkedinkIcon />
  ];

  return (
    <Wrapper>
      {
        socialNetworksList.map((item, index) => {
          return (
            <Item key={index}>
              <a href="#" alt="">
                {item}
              </a>
            </Item>
          )
        })
      }
    </Wrapper>
  )
};