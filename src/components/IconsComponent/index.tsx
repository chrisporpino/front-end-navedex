import React from "react";
import styled from "styled-components";

import deleteIcon from "../../assets/images/icons/delete-icon.png";
import editIcon from "../../assets/images/icons/edit-icon.png";

const IconsContainer = styled.div`
  width: 56px;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  cursor: pointer;
`;


interface IconsComponentProps {
  toDelete: string;
  link: string;
}

// const IconsComponent: React.FC<BlackButtonProps> = ({ text, link }) => {

function IconsComponent() {

  <IconsContainer>
    <a href="/delete">
      <Icon src={deleteIcon} alt="Deletar" />
    </a>

    <a href="/edit">
      <Icon src={editIcon} alt="Editar" />
    </a>
  </IconsContainer>;
}

export default IconsComponent;
