import {
  FacebookIcon,
  TwitterIcon,
  LinkedinkIcon,
  Wrapper,
  Item,
} from "./styled";

export const SocialNetworks = ({ footerTop }) => {
  const socialNetworksList = [
    <FacebookIcon big={footerTop ? 1 : 0} />,
    <TwitterIcon big={footerTop ? 1 : 0} />,
    <LinkedinkIcon big={footerTop ? 1 : 0} />
  ];

  return (
    <Wrapper >
      {
        socialNetworksList.map((item, index) => {
          return (
            <Item big={footerTop ? 1 : 0} key={index}>
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