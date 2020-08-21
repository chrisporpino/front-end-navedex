import React from "react";
import styled from "styled-components";

import ImgJuliano from "../../assets/images/juliano.png";
import deleteIcon from "../../assets/images/icons/delete-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";

const CardContent = styled.div`
  width: 17.5rem;
  height: 23.5;
  margin-top: 2rem;
`

const TextBlock = styled.div`

`

function Card() {
  return (
    <CardContent>
      <a href="/view">
      <img src={ImgJuliano} alt="Foto de perfil" />
      </a>

      <TextBlock>
      <h2>Juliano Reis</h2>
      <p>Front-end Developer</p>
      </TextBlock>
      
      <a href="/delete">
      <img src={deleteIcon} alt="Deletar" />
      </a>

      <img src={editIcon} alt="Editar" />
    </CardContent>
  );
}

export default Card;