import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

import arrowIcon from "../../assets/images/icons/arrow-icon.png";
import Input from "../../components/Input";
import BlackButton from "../../components/BlackButton";

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

const InputContainer = styled.form`
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
  return (
    <Root>
      <Header />
      <MainContainer>
        <TitleDiv>
          <a href="/home">
            <ArrowIcon src={arrowIcon} alt="Voltar" />
          </a>
          <h1>Adicionar Naver</h1>
        </TitleDiv>

        <InputContainer>
          <Input
            name="name"
            label="Nome"
            placeholder="Nome"

            // usar para integrar com o backend
            // value={avatar}
            // onChange={(e) => {
            //   setAvatar(e.target.value);
            // }}
          />
          <Input
            name="job"
            label="Cargo"
            placeholder="Cargo"

            // usar para integrar com o backend
            // value={avatar}
            // onChange={(e) => {
            //   setAvatar(e.target.value);
            // }}
          />
          <Input
            name="age"
            label="Idade"
            placeholder="Idade"

            // usar para integrar com o backend
            // value={avatar}
            // onChange={(e) => {
            //   setAvatar(e.target.value);
            // }}
          />
          <Input
            name="timeInCompany"
            label="Tempo de Empresa"
            placeholder="Tempo de Empresa"

            // usar para integrar com o backend
            // value={avatar}
            // onChange={(e) => {
            //   setAvatar(e.target.value);
            // }}
          />
          <Input
            name="participations"
            label="Projetos que participou"
            placeholder="Projetos que participou"

            // usar para integrar com o backend
            // value={avatar}
            // onChange={(e) => {
            //   setAvatar(e.target.value);
            // }}
          />
          <Input
            name="picture"
            label="URL da foto do Naver"
            placeholder="URL da foto do Naver"

            // usar para integrar com o backend
            // value={avatar}
            // onChange={(e) => {
            //   setAvatar(e.target.value);
            // }}
          />

          <BlackButton link="/added" text="Salvar" />
        </InputContainer>
      </MainContainer>
    </Root>
  );
}

export default AddPerson;
