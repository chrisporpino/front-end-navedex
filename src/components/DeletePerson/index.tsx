import React from "react";
import styled from "styled-components";
import BlackButton from "../BlackButton";
import WhiteButton from "../WhiteButton";

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

const TextP = styled.p`
  line-height: 36px;
`;

const ButtonsContainer = styled.div`
  width: 23.5rem;
  height: 2.5rem;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
`;


function DeletePerson() {
  return (
    <Root>
      <ConfirmationBox>
        <TextH2>Excluir Naver</TextH2>
        <TextP>Tem certeza que deseja excluir este Naver?</TextP>

        <ButtonsContainer>

          <WhiteButton />
          <BlackButton />
          
        </ButtonsContainer>
      </ConfirmationBox>
    </Root>
  );
}

export default DeletePerson;
