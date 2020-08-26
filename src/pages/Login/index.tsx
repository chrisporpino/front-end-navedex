import React, { useState, FormEvent, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Input";
import styled from "styled-components";
import api from "../../services/axios";
import { useHistory } from "react-router-dom";

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
  padding: 2rem;
`;

const LogoImg = styled.img`
  width: 14.75rem;
  height: 3.75rem;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  width: 100%;
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

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

function Login() {
  const history = useHistory();

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token === null) {
      history.push("/");
    } else {
      history.push("/home");
    }
  }, [history]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    api
      .post("users/login", body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("Usuário ou senha incorretos. Tente novamente.")
      });
  };

  return (
    <Root>
      <MainContainer>
        <LogoImg src={logo} alt="Nave.rs" />

        <Form onSubmit={handleLogin}>
          <Input
            name="email"
            label="E-mail"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <Input
            name="password"
            label="Senha"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onSubmit={handleLogin} type="submit">Entrar</Button>
        </Form>
      </MainContainer>
    </Root>
  );
}

export default Login;
