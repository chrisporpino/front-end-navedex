import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  width: 11rem;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #212121;
  color: #ffffff;
  text-decoration: none;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
`;

function BlackButton() {
  return(
    <Button href="/deleted">Excluir</Button>
  )
}

export default BlackButton;