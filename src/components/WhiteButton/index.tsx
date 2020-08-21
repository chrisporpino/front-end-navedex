import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 11rem;
  height: 40px;
  background: #ffffff;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
`;

function WhiteButton() {
  return(
    <Button>Cancelar</Button>
  )
}

export default WhiteButton;