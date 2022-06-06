import { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { Container } from "../../common/Container";
import { Background, ModalWrapper, CloseModalButton } from "./styled";
import { ButtonRed } from "../ButtonRed";

export const Popup = ({ button, content }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? "translateY(0%" : "translateY(-100%)",
  });

  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setShowPopup(false);
    }
  };

  return (
    <>
      <ButtonRed onClick={openPopup}>
        {button}
      </ButtonRed >
      {showPopup ? (
        <Background ref={popupRef} onClick={closePopup}>
          <Container>
            <animated.div style={animation}>
              <ModalWrapper >
                {content}
                <CloseModalButton
                  onClick={() => setShowPopup(false)}
                />
              </ModalWrapper>
            </animated.div>
          </Container>
        </Background>
      ) : null}
    </>
  )
};


