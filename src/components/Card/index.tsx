import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import deleteIcon from "../../assets/images/icons/delete-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import ShowPerson from "../ShowPerson";


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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  function saveId() {
    window.localStorage.setItem("person_id", person.id);
  }

  function handleClickOnPicture() {
    saveId();
    toggleModal();
  }

  function handleClickToDelete() {
    saveId();
    console.log(person.id);
    history.push("/delete");
  }

  function handleClickToEdit() {
    saveId();
    console.log(person.id);
    history.push("/edit");
  }

  return (
    <CardContent>
      <ProfilePic
        onClick={handleClickOnPicture}
        src={person.url}
        alt={person.name}
      />
      {isModalVisible ? <ShowPerson onClose={toggleModal}/> : null}

      <TextBlock>
        <TextTitle>{person.name}</TextTitle>
        <TextRole>{person.job_role}</TextRole>
      </TextBlock>

      <IconsContainer>
        <Icon onClick={handleClickToDelete} src={deleteIcon} alt="Deletar" />
        <Icon onClick={handleClickToEdit} src={editIcon} alt="Editar" />
      </IconsContainer>
    </CardContent>
  );
};

export default Card;
