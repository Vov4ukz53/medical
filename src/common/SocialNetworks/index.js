import {
  FacebookIcon,
  TwitterIcon,
  LinkedinkIcon,
  Wrapper,
  Item,
} from "./styled";

export const SocialNetworks = ({ footerTop }) => {
  const socialNetworksList = [
    <FacebookIcon big={footerTop} />,
    <TwitterIcon big={footerTop} />,
    <LinkedinkIcon big={footerTop} />
  ];

  return (
    <Wrapper >
      {
        socialNetworksList.map((item, index) => {
          return (
            <Item big={footerTop} key={index}>
              <a href="https://www.google.com/" alt="">
                {item}
              </a>
            </Item>
          )
        })
      }
    </Wrapper>
  )
};