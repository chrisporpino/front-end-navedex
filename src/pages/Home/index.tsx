import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Card, { Person } from "../../components/Card";
import Header from "../../components/Header";
import BlackButton from "../../components/BlackButton";
import api, { headers } from "../../services/axios";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: #ffffff;
`;

const MainContainer = styled.main`
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
`;

const PeopleSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Home() {
  useProtectedPage();

  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople();
  }, []);

  function getPeople() {
    api
      .get("navers", { headers })
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <Root>
      <Header />

      <MainContainer>
        <TitleDiv>
          <Title>Navers</Title>
          <Link to="/add">
            <BlackButton text="Adicionar Naver" />
          </Link>
        </TitleDiv>

        <PeopleSection>
          {people.map((person: Person) => {
            return <Card key={person.id} person={person} />;
          })}
        </PeopleSection>
      </MainContainer>
    </Root>
  );
}

export default Home;
