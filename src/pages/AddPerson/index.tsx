import React, { useState, FormEvent } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/Header";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";
import Input from "../../components/Input";
import BlackButton from "../../components/BlackButton";
import api, { headers } from "../../services/axios";
import AddedSuccessfully from "../../components/AddedSuccessfully";

const Root = styled.div`
  width: 100vw;
  max-width: 1280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  background: #ffffff;
`;

const MainContainer = styled.main`
  width: 37rem;
  height: 24.5rem;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
`;

function AddPerson() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [job_role, setJobRole] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [admission_date, setAdmissionDate] = useState("");
  const [participations, setParticipations] = useState("");
  const [pictureURL, setPictureURL] = useState("");

  function handleCreatePerson(e: FormEvent) {
    e.preventDefault();

    const body = {
      name,
      job_role,
      birthdate,
      admission_date,
      project: participations,
      url: pictureURL,
    };

    api
      .post("navers", body, { headers })
      .then((response) => {
        // history.push("/added");
        toggleModalFeedback()
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("Erro no cadastro!");
      });
  }

  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);
  const toggleModalFeedback = () => {
    setIsModalFeedbackOpen(!isModalFeedbackOpen);
  }
    

  return (
    <Root>
      <Header />
      <MainContainer>
        <TitleDiv>
          <Link to="/home">
            <ArrowIcon src={arrowIcon} alt="Voltar" />
          </Link>
          <h1>Adicionar Naver</h1>
        </TitleDiv>

        <Form onSubmit={handleCreatePerson}>
          <Input
            name="name"
            label="Nome"
            placeholder="Nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            name="job_role"
            label="Cargo"
            placeholder="Cargo"
            value={job_role}
            onChange={(e) => {
              setJobRole(e.target.value);
            }}
          />
          <Input
            name="birthdate"
            label="Data de Nascimento"
            placeholder="Data de Nascimento"
            value={birthdate}
            onChange={(e) => {
              setBirthdate(e.target.value);
            }}
          />
          <Input
            name="admission_date"
            label="Data de Admissão"
            placeholder="Data de Admissão"
            value={admission_date}
            onChange={(e) => {
              setAdmissionDate(e.target.value);
            }}
          />
          <Input
            name="participations"
            label="Projetos que participou"
            placeholder="Projetos que participou"
            value={participations}
            onChange={(e) => {
              setParticipations(e.target.value);
            }}
          />          
          <Input
            name="pictureURL"
            label="URL da foto do Naver"
            placeholder="URL da foto do Naver"
            value={pictureURL}
            onChange={(e) => {
              setPictureURL(e.target.value);
            }}
          />

          <BlackButton onSubmitForm={handleCreatePerson} text="Salvar" />
          <AddedSuccessfully
          title="Naver criado"
          text="Naver criado com sucesso!"
          isOpen={isModalFeedbackOpen}
          onClose={toggleModalFeedback}
        />
        </Form>
      </MainContainer>
    </Root>
  );
}

export default AddPerson;
