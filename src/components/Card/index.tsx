import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import deleteIcon from "../../assets/images/icons/delete-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import ShowPerson from "../ShowPerson";
import DeletePerson from "../DeletePerson";
import api, { headers } from "../../services/axios";
import ModalFeedback from "../ModalFeedback";

import * as moment from "moment";
moment.locale("pt-br");

const CardContent = styled.div`
  width: 17.5rem;
  height: 23.5;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 17.5rem;
  cursor: pointer;
`;

const TextBlock = styled.div``;

const TextTitle = styled.p`
  margin-top: 1rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;

const TextRole = styled.p`
  margin-top: 4px;
  margin-bottom: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const IconsContainer = styled.div`
  width: 59px;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  cursor: pointer;
`;

export interface Person {
  admission_date: string;
  birthdate: string;
  id: string;
  job_role: string;
  name: string;
  project: string;
  url: string;
}

export interface PersonProps {
  person: Person;
  handleDeletedPerson: () => void;
}

const Card: React.FC<PersonProps> = ({ person, handleDeletedPerson }) => {
  const history = useHistory();

  function saveId() {
    window.localStorage.setItem("person_id", person.id);
  }

  const [isPersonDetailsVisible, setIsPersonDetailsVisible] = useState(false);
  const toggleDetailsVisibility = () =>
    setIsPersonDetailsVisible(!isPersonDetailsVisible);

  function handleClickOnPicture() {
    getPersonDetails();
    toggleDetailsVisibility();
  }

  function getPersonDetails() {
    api
      .get(`navers/${person.id}`, { headers })
      .then((response) => {
      })
      .catch((error) => {
        console.log("show", error.response.data);
      });
  }

  //  TO DO calcular data de nascimento

  // function calculateAge() {
  //   const today: Date = new Date();
  //   const birthdate = new Date(person.birthdate);
  //   const diff = Math.abs(today.getTime() - birthdate.getTime());
  //   const years = Math.ceil((diff / (1000 * 60 * 60 * 24 * 365.25)));
  //   console.log("Idade é", years);
  // }

    const today: Date = new Date();
    const birthdate = new Date(person.birthdate);
    const diffBirthdate = (today.getTime() - birthdate.getTime());
    const yearInMilliseconds = (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(diffBirthdate / yearInMilliseconds)
    const calculatedAge = `${age} anos`
  
    const admission_date = new Date(person.admission_date);
    const diffTimeAdmission = (today.getTime() - admission_date.getTime());
    const years = Math.floor(diffTimeAdmission / yearInMilliseconds)
    const monthsInMilliseconds = (diffTimeAdmission % (yearInMilliseconds))
    const convertMonths = Math.floor(monthsInMilliseconds/(yearInMilliseconds/12))
    const timeInCompany = `${years} anos e ${convertMonths} meses`
        


  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const toggleDeleteModalVisibility = () =>
    setIsDeleteModalVisible(!isDeleteModalVisible);

  function onClickOnDeleteIcon() {
    toggleDeleteModalVisibility();
    toggleDetailsVisibility();
  }

  function handleClickToEdit() {
    saveId();
    history.push("/edit");
  }

  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);
  const toggleModalFeedback = () =>
    setIsModalFeedbackOpen(!isModalFeedbackOpen);

  function goToHome() {
    toggleModalFeedback();
    handleDeletedPerson()
    // history.push("/home");
  }

  function onClickOnDeleteFromHome() {
    toggleDeleteModalVisibility();
  }

  function confirmDeleteFromHome () {
    onDelete()
    toggleDeleteModalVisibility();
  }

  function onDelete() {
    api
      .delete(`navers/${person.id}`, { headers })
      .then((response) => {
        toggleModalFeedback();
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("Erro ao excluir!");
      });
  }

  return (
    <CardContent>
      <ProfilePic
        onClick={handleClickOnPicture}
        src={person.url}
        alt={person.name}
      />
      <ShowPerson
        isOpen={isPersonDetailsVisible}
        onClose={toggleDetailsVisibility}
        handleClickToDelete={onClickOnDeleteIcon}
        person={person}
        age={calculatedAge}
        timeOfWork={timeInCompany}
      />
      <DeletePerson
        isOpen={isDeleteModalVisible}
        onClose={toggleDeleteModalVisibility}
        handleClickToDelete={onDelete}
      />
      <ModalFeedback
        title="Naver excluído"
        text="Naver excluído com sucesso"
        isOpen={isModalFeedbackOpen}
        onClose={goToHome}
      />

      <TextBlock>
        <TextTitle>{person.name}</TextTitle>
        <TextRole>{person.job_role}</TextRole>
      </TextBlock>

      <IconsContainer>
        <Icon onClick={onClickOnDeleteFromHome} src={deleteIcon} alt="Deletar" />
        <DeletePerson
          isOpen={isDeleteModalVisible}
          onClose={toggleDeleteModalVisibility}
          handleClickToDelete={confirmDeleteFromHome}
        />
        <ModalFeedback
          title="Naver excluído"
          text="Naver excluído com sucesso"
          isOpen={isModalFeedbackOpen}
          onClose={goToHome}
        />

        <Icon onClick={handleClickToEdit} src={editIcon} alt="Editar" />
      </IconsContainer>
    </CardContent>
  );
};

export default Card;
