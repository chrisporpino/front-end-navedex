import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import closeIcon from "../../assets/images/icons/close-icon.png";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const SuccessfullyBox = styled.div`
  width: 37rem;
  height: 10rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextH2 = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

const CommonText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 36px;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: -12px -12px 0 0;
  cursor: pointer;
`;

interface ModalFeedbackProps {
  title: string;
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalFeedback: React.FC<ModalFeedbackProps> = ({
  title,
  text,
  isOpen,
  onClose,
}) => {
  const history = useHistory();

  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      goToHome();
    }
  };

  function goToHome() {
    onClose();
    history.push("/home");
  }

  return isOpen ? (
    <Root ref={overlayRef} onClick={handleOverlayClick}>
      <SuccessfullyBox>
        <TextBlock>
          <TextH2>{title}</TextH2>
          <CommonText>{text}</CommonText>
        </TextBlock>
        <CloseIcon onClick={goToHome} src={closeIcon} alt="Fechar" />
      </SuccessfullyBox>
    </Root>
  ) : null;
};

export default ModalFeedback;
