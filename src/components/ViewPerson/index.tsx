import React from 'react';
import styled from 'styled-components';

import ImgJuliano from "../../assets/images/juliano.png";

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

const TextBlock = styled.div`

`

const ViewContent = styled.div`
  width: 63rem;
  height: 31.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`

function ViewPerson() {
  return(
    <Root>
      <ViewContent>
        <div>
        <img src={ImgJuliano} alt="Foto de Perfil"/>
        </div>
        
        <div>
        <TextBlock></TextBlock>
        <h1>Juliano Reis</h1>
        <p>Front-end Developer</p>

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
        </div>
      </ViewContent>
    </Root>
  );
}

export default ViewPerson;