import { createContext, useState, useContext, useEffect } from "react";
import { checkingJwtToken } from "./JwtTokenGenerator";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  const login = (token) => {
    setIsAuthenticated(true);
    setToken(token);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('authToken');
  };

  const checkAuth = async () => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      try {
        const payload = await checkingJwtToken(storedToken);
        if (payload) {
          setIsAuthenticated(true);
          setToken(storedToken);
        } else {
          setIsAuthenticated(false);
          setToken(null);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuthenticated(false);
        setToken(null);
      }
    } else {
      setIsAuthenticated(false);
      setToken(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout, checkAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
