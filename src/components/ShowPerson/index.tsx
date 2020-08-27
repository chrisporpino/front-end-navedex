import React from "react";
import styled from "styled-components";

import closeIcon from "../../assets/images/icons/close-icon.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import { useHistory } from "react-router-dom";
import { Person } from "../Card";

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

const MainContainer = styled.main`
  width: 63rem;
  height: 31.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
`;

const ShowPicture = styled.section`
  width: 50%;
  height: 100%;
`;

const InfoContainer = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 0 2rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 10px;
`;

const CommonText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const BoldText = styled.strong`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 24px 0 10px 0;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

const IconsContainer = styled.div`
  width: 56px;
  display: flex;
  justify-content: space-between;
  margin: 2rem 1.5rem;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: -16px 16px 0 0;
  cursor: pointer;
`;

interface ShowPersonProps {
  isOpen: boolean;
  onClose: () => void;
  handleClickToDelete: () => void;
  person: Person;
  age: string;
  timeOfWork: string;
}

const ShowPerson: React.FC<ShowPersonProps> = ({
  isOpen,
  onClose,
  handleClickToDelete,
  person,
  age,
  timeOfWork,
}) => {
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const history = useHistory();

  function saveId() {
    window.localStorage.setItem("person_id", person.id);
  }

  function handleClickToEdit() {
    saveId();
    history.push("/edit");
  }

  return isOpen ? (
    <Root ref={overlayRef} onClick={handleOverlayClick}>
      <MainContainer>
        <ShowPicture>
          <Picture src={person.url} alt={person.name} />
        </ShowPicture>

        <InfoContainer>
          <TextContainer>
            <TextBox>
              <TextTitle>{person.name}</TextTitle>
              <CommonText>{person.job_role}</CommonText>

              <BoldText>Idade</BoldText>
              <CommonText>{age}</CommonText>

              <BoldText>Tempo de Empresa</BoldText>
              <CommonText>{timeOfWork}</CommonText>

              <BoldText>Projetos que participou</BoldText>
              <CommonText>{person.project}</CommonText>
            </TextBox>

            <CloseIcon onClick={onClose} src={closeIcon} alt="Fechar" />
          </TextContainer>
          <IconsContainer>
            <Icon
              onClick={handleClickToDelete}
              src={deleteIcon}
              alt="Deletar"
            />
            <Icon onClick={handleClickToEdit} src={editIcon} alt="Editar" />
          </IconsContainer>
        </InfoContainer>
      </MainContainer>
    </Root>
  ) : null;
};

export default ShowPerson;