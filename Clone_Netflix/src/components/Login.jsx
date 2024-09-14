import styled from "styled-components";
import Footer from "./Footer";
import Header from "./LoginComponents/Header";
import { useState } from "react";

const Container = styled.div`
  background: url("/login_background.jpg") no-repeat center/cover;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  background: rgba(0, 0, 0, 0.75);
  padding: 48px 68px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-width: 90%;
  color: #fff;
`;

const InputContainer = styled.div`
  margin-bottom: 2rem;
  border: 1px solid;
  border-color: rgba(128, 128, 128, 0.7);
  padding: 1.5rem 1rem 0.5rem;
  border-radius: 0.25rem;
  position: relative;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  background: rgba(128, 128, 128, 0);
  color: white;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #f6121d;
  }
`;

const ErrorText = styled.div`
  color: #f00;
  font-size: 0.875rem;
  position: absolute;
  bottom: -1.5rem;
  left: 0;
`;

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    let errors = { email: "", password: "" };

    if (!email) {
      errors.email = "O e-mail é obrigatório.";
      isValid = false;
    } else if (email !== "admin") {
      errors.email = "E-mail inválido.";
      isValid = false;
    }

    if (!password) {
      errors.password = "A senha é obrigatória.";
      isValid = false;
    } else if (password !== "password") {
      errors.password = "Senha incorreta.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login bem-sucedido");
      onLogin();
    }
  };

  return (
    <Container>
      <Header />
      <LoginForm onSubmit={handleLogin}>
        <h2>Entrar</h2>
        <InputContainer>
          <Label>Email ou número de celular</Label>
          <Input
            type="text"
            placeholder="admin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </InputContainer>
        <Button type="submit">Entrar</Button>
        <div>OU</div>
        <Button style={{ background: "#333" }}>Usar um código de acesso</Button>
        <div>Esqueceu a senha?</div>
        <label>
          <Input type="checkbox" />
          Lembre-se de mim
        </label>
        <div>
          Novo por aqui? <a href="#">Assine agora</a>.
        </div>
        <div>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô. <a href="#">Saiba mais</a>.
        </div>
      </LoginForm>
      <Footer />
    </Container>
  );
};

export default LoginPage;
