import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import LoginContainer from "./components/Login.jsx";
import { useAuth } from "./services/AuthContext.jsx";
import Home from "./components/Home.jsx";
import SearchResults from "./components/SearchResults.jsx";
import Series from "./components/Series.jsx";

function App() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);
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
          <Route path="/series" element={<Series />} /> 

        </Routes>
      )}
    </>
  );
}

export default App;
