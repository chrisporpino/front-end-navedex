import React from 'react';
import styled from "styled-components";

import deleteIcon from "../../assets/images/icons/delete-icon.png";

const Icon = styled.img`
  cursor: pointer;
`;

interface DeleteIconProps {
  executeOnClick: string;
}

function DeleteIcon() {
  return(
    <div>
      <Icon src={deleteIcon} alt="Deletar" />
    </div>
  )
}

export default DeleteIcon;