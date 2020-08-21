import React from "react";
import styled from "styled-components";

import ImgJuliano from "../../assets/images/juliano.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";
import closeIcon from "../../assets/images/icons/close-icon.png";

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

const MainContent = styled.main`
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

const TextContainer = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem 1.5rem 2rem;
`;

const TextBlock = styled.div``;


const Picture = styled.img`
  width: 100%;
`

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  /* margin: -12px -12px 0 0; */
`;

function ViewPerson() {
  return (
    <Root>
      <MainContent>
        <ShowPicture>
          <Picture src={ImgJuliano} alt="Foto de Perfil" />
        </ShowPicture>

        <TextContainer>
          <div>
            <TextBlock>
              <h1>Juliano Reis</h1>
              <p>Front-end Developer</p>
            </TextBlock>

            <TextBlock>
              <h2>Idade</h2>
              <p>Lorem Ipsum</p>
            </TextBlock>

            <TextBlock>
              <h2>Tempo de Empresa</h2>
              <p>Lorem Ipsum</p>
            </TextBlock>

            <TextBlock>
              <h2>Projetos que participou</h2>
              <p>Lorem Ipsum</p>
            </TextBlock>

            <a href="/delete">
              <img src={deleteIcon} alt="Deletar" />
            </a>

            <a href="/edit">
              <img src={editIcon} alt="Editar" />
            </a>
          </div>

          <a href="/home">
            <CloseIcon src={closeIcon} alt="Fechar" />
          </a>
        </TextContainer>
      </MainContent>
    </Root>
  );
}

export default ViewPerson;
