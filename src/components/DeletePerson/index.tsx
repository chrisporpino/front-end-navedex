import React from "react";
import styled from "styled-components";
import BlackButton from "../BlackButton";

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

const ConfirmationBox = styled.div`
  width: 37rem;
  height: 14.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
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

const ButtonsContainer = styled.div`
  width: 23.5rem;
  height: 2.5rem;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
`;

const WhiteButton = styled.a`
  width: 11rem;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  border: 1px solid #212121;
  text-decoration: none;
  color: #212121;
  cursor: pointer;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;  
`;

interface DeletePersonProps {
  isOpen: boolean;
  onClose: () => void;
  handleClickToDelete: () => void;
}

const DeletePerson: React.FC<DeletePersonProps> = ({
  isOpen,
  onClose,
  handleClickToDelete,
}) => {
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Root ref={overlayRef} onClick={handleOverlayClick}>
      <ConfirmationBox>
        <TextH2>Excluir Naver</TextH2>
        <CommonText>Tem certeza que deseja excluir este Naver?</CommonText>

        <ButtonsContainer>
          <WhiteButton onClick={onClose}>Cancelar</WhiteButton>
          <BlackButton handleClickOnBlackButton={handleClickToDelete} text="Excluir" />
        </ButtonsContainer>
      </ConfirmationBox>
    </Root>
  ) : null;
};

export default DeletePerson;