import React from "react";
import styled from "styled-components";

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

const SuccessfullyBox = styled.div`
  width: 37rem;
  height: 10rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextH2 = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`;

const TextP = styled.p`
  line-height: 36px;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: -12px -12px 0 0;
`

function EditedSuccessfully() {
  return (
    <Root>
      <SuccessfullyBox>

        <TextBlock>
          <TextH2>Naver atualizado</TextH2>
          <TextP>Naver atualizado com suceso!</TextP>
        </TextBlock>
        
        <a href="/home">
        <CloseIcon src={closeIcon} alt="Fechar" />
        </a>
      </SuccessfullyBox>
    </Root>
  );
}

export default EditedSuccessfully;
