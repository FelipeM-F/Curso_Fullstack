import styled from "styled-components";

const Container = styled.div`
  background: url('/login_background.jpg') no-repeat center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoginForm = styled.form`
  background: rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px; // Adjust the width as needed
  max-width: 90%;
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const InputContainer = styled.div`
    margin-bottom: 1rem;
    border: 1px solid;
    border-color: rgba(128, 128, 128, 0.7);
    border-radius: 0.25rem;
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;''
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

const LoginPage = ({onLogin}) => {


  const handleLogin = () => {
    console.log('Login');
    onLogin();
  };



  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <h2>Entrar</h2>
        <InputContainer>          
        <Label>Email ou número de celular</Label>
        <Input type="text"/>
        </InputContainer>
        <InputContainer> 
        <Label>Senha</Label> 
        <Input type="password"/>
        </InputContainer>
        <Button type="submit" >Entrar</Button>
        <div>OU</div>
        <Button style={{ background: '#333' }}>Usar um código de acesso</Button>
        <div>Esqueceu a senha?</div>
        <label>
          <Input type="checkbox" />
          Lembre-se de mim
        </label>
        <div>Novo por aqui? <a href="#">Assine agora</a>.</div>
        <div>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais</a>.</div>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;