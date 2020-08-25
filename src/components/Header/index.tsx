import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";

const HeaderContent = styled.header`
  width: 100vw;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  margin-bottom: 40px;
`;

const LogoHeader = styled.img`
  width: 145.12px;
  height: 37px;
`;

const Paragraph = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;

function Header() {
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <HeaderContent>
      <LogoHeader src={logo} alt="Logo" />
      <div onClick={handleLogout}>
        <Paragraph>Sair</Paragraph>
      </div>
    </HeaderContent>
  );
}

export default Header;
