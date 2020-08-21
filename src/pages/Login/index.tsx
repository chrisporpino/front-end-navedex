import React from "react";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Input";
import styled from "styled-components";

const Root = styled.main`
  width: 100vw;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.main`
  width: 28rem;
  height: 25.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #212121;
`;

const LogoImg = styled.img`
  width: 14.75rem;
  height: 3.75rem;
  margin: 2.5rem 0;
`;

const Button = styled.a`
  width: 24rem;
  height: 2.5rem;
  background: #212121;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
`;

function Login() {
  return (
    <Root>
      <MainContainer>
        <LogoImg src={logo} alt="Nave.rs" />

        <Input
          name="email"
          label="E-mail"
          placeholder="E-mail"

          // usar para integrar com o backend
          // value={avatar}
          // onChange={(e) => {
          //   setAvatar(e.target.value);
          // }}
        />

        <Input
          name="password"
          label="Senha"
          placeholder="Senha"

          // usar para integrar com o backend
          // value={avatar}
          // onChange={(e) => {
          //   setAvatar(e.target.value);
          // }}
        />
        <Button href="/home">Entrar</Button>
      </MainContainer>
    </Root>
  );
}

export default Login;
