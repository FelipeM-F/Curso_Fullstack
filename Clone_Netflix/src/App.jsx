import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "./components/Login.jsx";
import { useAuth } from "./services/AuthContext.jsx";
import Home from "./components/Home.jsx";


function App() {

  const { isAuthenticated, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>

      {!isAuthenticated ? (
          <LoginContainer onLogin={
            login} />
      ) : (
        <Home />
      )}

    </>
  );
}

export default App;
