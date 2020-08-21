import React from 'react';
import styled from 'styled-components';

import logo from "../../assets/images/logo.png";

const HeaderContent = styled.header`
  width: 100vw;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const LogoHeader = styled.img`
  width: 145.12px;
  height: 37px;
`;

function Header() {
  return(
    <HeaderContent>
        <LogoHeader src={logo} alt="Logo" />
        <p>Sair</p>
      </HeaderContent>
  );
}

export default Header;