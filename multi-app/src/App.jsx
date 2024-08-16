import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import QRCodeGenerator from "./components/QRCodeGenarator";
import IPAddressFinder from "./components/IPAddressFinder";
import MovieSearchContainer from "./components/MovieSearchContainer";
import TodoApp from "./components/TodoApp";
import QuizApp from "./components/QuizApp";
import LanguageTranslator from "./components/LanguageTranslator";
import Login from "./components/Login";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useAuth } from "./services/AuthContext";
import NavBar from "./components/NavBar";
import CarouselComponent from "./components/Carousel";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;


// Estiliza o rodapé do aplicativo.
const Footer = styled.div`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 12px;
  }
`;



// Estiliza o botão de retorno.
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;


// Define o componente principal do aplicativo.
const App = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

  const handleReturn = () => setCurrentComponent(null);

  const components = {
    QRCodeGenerator,
    IPAddressFinder,
    MovieSearchContainer,
    TodoApp,
    QuizApp,
    LanguageTranslator,
  };

  const renderComponent = (componentName) => {
    const Component = components[componentName];
    return Component ? <Component /> : null;
  };


  return (
    <AppContainer>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={login} />
        </MainContent>
      ) : (
        <>
          <NavBar
            handleAccess={handleAccess}
            logout={logout}
          />
          <MainContent>
            {currentComponent ? (
              <>
                {renderComponent(currentComponent)}
                <ReturnButton onClick={handleReturn}>
                  <FaArrowLeft /> Return
                </ReturnButton>
              </>
            ) : (
              <CarouselComponent handleAccess={handleAccess}></CarouselComponent>             
            )}
            
          </MainContent>
          <Footer>© 2024 Your Company | All rights reserved</Footer>
        </>
      )}
    </AppContainer>
  );
};

export default App;
