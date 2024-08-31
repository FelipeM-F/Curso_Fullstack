import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import LoginContainer from "./components/Login.jsx";
import { useAuth } from "./services/AuthContext.jsx";
import Home from "./components/Home.jsx";
import SearchResults from "./components/SearchResults.jsx"; // Importe o SearchResults

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
        <LoginContainer onLogin={login} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} /> 
        </Routes>
      )}
    </>
  );
}

export default App;
