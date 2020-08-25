import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import deleteIcon from "../../assets/images/icons/delete-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import ShowPerson from "../ShowPerson";
import DeletePerson from "../DeletePerson";
import api, { headers } from "../../services/axios";
import DeletedSuccessfully from "../DeletedSuccessfully";

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
  id: string;
  job_role: string;
  name: string;
  url: string;
}

interface CardPersonProps {
  person: Person;
}

const Card: React.FC<CardPersonProps> = ({ person }) => {
  const history = useHistory();

  function saveId() {
    window.localStorage.setItem("person_id", person.id);
  }

  const [isPersonDetailsVisible, setIsPersonDetailsVisible] = useState(false);
  const toggleDetailsVisibility = () =>
    setIsPersonDetailsVisible(!isPersonDetailsVisible);

  function handleClickOnPicture() {
    saveId();
    toggleDetailsVisibility();
  }

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const toggleDeleteModalVisibility = () =>
    setIsDeleteModalVisible(!isDeleteModalVisible);

  function onClickOnDeleteIcon() {
    toggleDeleteModalVisibility();
  }

  function handleClickToEdit() {
    saveId();
    console.log(person.id);
    history.push("/edit");
  }

  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);
  const toggleModalFeedback = () =>
    setIsModalFeedbackOpen(!isModalFeedbackOpen);

  function onDelete() {
    api
      .delete(`navers/${person.id}`, { headers })
      .then((response) => {
        toggleModalFeedback();
        toggleDeleteModalVisibility();
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
      {isPersonDetailsVisible ? (
        <ShowPerson onClose={toggleDetailsVisibility} />
      ) : null}

      <TextBlock>
        <TextTitle>{person.name}</TextTitle>
        <TextRole>{person.job_role}</TextRole>
      </TextBlock>

      <IconsContainer>
        <Icon onClick={onClickOnDeleteIcon} src={deleteIcon} alt="Deletar" />
        <DeletePerson
          isOpen={isDeleteModalVisible}
          onClose={toggleDeleteModalVisibility}
          handleClickToDelete={onDelete}
        />
        <DeletedSuccessfully
          title="Naver excluído"
          text="Naver excluído com sucesso"
          isOpen={isModalFeedbackOpen}
          onClose={toggleModalFeedback}
        />

        <Icon onClick={handleClickToEdit} src={editIcon} alt="Editar" />
      </IconsContainer>
    </CardContent>
  );
};

export default Card;
