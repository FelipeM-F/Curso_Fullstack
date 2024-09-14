import React from "react";
import styled from "styled-components";
import Header from "./HomeComponents/Header";
import Footer from "./Footer";

// Estilizando os componentes com styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #141414;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
    color: white;

`;

const Text = styled.p`
  font-size: 1.125rem;
  color: white;
  margin-bottom: 32px;
`;

const Image = styled.img`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const UnderConstruction = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Title>Página em Construção</Title>
        <Text>Esta seção está em construção. Por favor, volte mais tarde.</Text>
        <Image
          src="https://via.placeholder.com/400x300.png?text=Em+Constru%C3%A7%C3%A3o"
          alt="Em Construção"
        />
      </Main>
      <Footer />
    </Container>
  );
};

export default UnderConstruction;
