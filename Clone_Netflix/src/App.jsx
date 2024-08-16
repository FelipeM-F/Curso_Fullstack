import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginContainer from "./components/LoginContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAuth } from "./components/AuthContext.jsx";
import Home from "./components/Home.jsx";

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #333; // Example background color for header
`;

const LoginWrapper = styled.div`
  flex: 1; // Take up remaining space
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #333; // Example background color for footer
`;

function App() {

  const { isAuthenticated, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      {!isAuthenticated ? (
        <LoginWrapper>
                {console.log("isAuthenticated:", isAuthenticated)}

          <LoginContainer onLogin={
            login} />
        </LoginWrapper>
      ) : (
        <Home />
      )}
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}

export default App;
