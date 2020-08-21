import React from "react";
import styled from "styled-components";

import Card from "../../components/Card";
import Header from "../../components/Header";

const Root = styled.div`
  width: 100vw;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  background: #ffffff;
`;

const MainContainer = styled.main`
  padding: 0 32px;
`

const TitleDiv = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PeopleSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

function Home() {
  return (
    <Root>
      
      <Header />

      <MainContainer>
        <TitleDiv>
        <h1>Navers</h1>
        <button> Adicionar Naver </button>
        </TitleDiv>

        <PeopleSection>
          <Card />
          <Card />
          <Card />
          <Card />
        </PeopleSection>
      </MainContainer>
    </Root>
  );
}

export default Home;
