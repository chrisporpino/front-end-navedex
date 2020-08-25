import React from "react";
import styled from "styled-components";
import BlackButton from "../BlackButton";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import api, { headers } from "../../services/axios";

const Root = styled.div`
  width: 100vw;
  max-width: 1280px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  background: gray;
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

  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
`;

function DeletePerson() {
  useProtectedPage();

  const person_id = window.localStorage.getItem("person_id");

  const history = useHistory();

  function handleClickToDelete() {
    api
      .delete(`navers/${person_id}`, { headers })
      .then((response) => {
        console.log("pessoa deletada", response.data);

        history.push("/deleted");
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("Erro ao excluir!");
      });
  }

  return (
    <Root>
      <ConfirmationBox>
        <TextH2>Excluir Naver</TextH2>
        <CommonText>Tem certeza que deseja excluir este Naver?</CommonText>

        <ButtonsContainer>
          <WhiteButton href="/home">Cancelar</WhiteButton>
          <div onClick={handleClickToDelete}>
            <BlackButton text="Excluir" />
          </div>
        </ButtonsContainer>
      </ConfirmationBox>
    </Root>
  );
}

export default DeletePerson;
