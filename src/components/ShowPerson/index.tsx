import React, { useState, useEffect } from "react";
import styled from "styled-components";

import closeIcon from "../../assets/images/icons/close-icon.png";
import api, { headers } from "../../services/axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";

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
  padding: 2rem 1rem 1.5rem 2rem;
`;

const TextContainer = styled.section`
  width: 100%;
  display: flex;

  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBlock = styled.div``;

const TextTitle = styled.h1`
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
  line-height: 24px;
`;

const BoldText = styled.strong`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

const IconsContainer = styled.div`
  width: 56px;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: -16px 0 0 0;
  cursor: pointer;
`;

interface PersonDetails {
  admission_date: string;
  birthdate: string;
  id: string;
  job_role: string;
  name: string;
  project: string;
  url: string;
}

interface ShowPersonProps {
  isOpen: boolean;
  onClose: () => void;
  handleClickToDelete: () => void;
}

const ShowPerson: React.FC<ShowPersonProps> = ({ isOpen, onClose, handleClickToDelete }) => {
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  }
  
  const person_id = window.localStorage.getItem("person_id");

  const history = useHistory();
  const [person, setPerson] = useState<PersonDetails>({} as PersonDetails);
  

  useEffect(() => {
    getPersonDetails();
    // calculateAge()
    console.log("show", person_id)
  }, []);


  function getPersonDetails() {
    api
      .get(`navers/${person_id}`, { headers })
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function saveId() {
    window.localStorage.setItem("person_id", person.id);
  }

  // function handleClickToDelete() {
  //   saveId();
  //   console.log(person.id);
  //   history.push("/delete");
  // }

  function handleClickToEdit() {
    saveId();
    console.log(person.id);
    history.push("/edit");
  }

  // const today = new Date();

  // const calculateAge = () => {
  //   console.log(person.birthdate);
  //   // console.log({today});
  // }

  // function calculateTimeInCompany() {

  // }

  return isOpen ?  (
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

              <TextBlock>
                <BoldText>Idade</BoldText>
                <CommonText>{person.birthdate}</CommonText>
              </TextBlock>

              <TextBlock>
                <BoldText>Tempo de Empresa</BoldText>
                <CommonText>{person.admission_date}</CommonText>
              </TextBlock>

              <TextBlock>
                <BoldText>Projetos que participou</BoldText>
                <CommonText>{person.project}</CommonText>
              </TextBlock>
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
