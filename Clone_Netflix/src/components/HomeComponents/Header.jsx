import { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import logo from "/logo.png";
import MovieSearch from "../SearchComponents/SearchInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthContext"; 

const Container = styled.div`
  width: auto;
  display: flex;
  padding: 20px;
  background-color: transparent;
  align-items: center;
`;

const NetflixIcon = styled.a`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px; 
`;

const HeaderLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px 10px;
  display: block;
`;

const SearchIcon = styled(FaSearch)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-left: 15px;
`;

const LogoutIcon = styled(FaSignOutAlt)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-left: 15px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: ${({ $show }) => ($show ? "auto" : "0px")};
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  overflow: hidden;
  transition: width 0.3s ease, opacity 0.3s ease;
`;

const LeftAlign = styled.div`
  display: flex;
  align-items: center;
`;

const RightAlign = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth(); 
  const toggleSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <Container>
      <LeftAlign>
        <NetflixIcon href="/">
          <LogoImage src={logo} alt="Netflix" />
        </NetflixIcon>
        <HeaderLink href="/series">Series</HeaderLink>
        <HeaderLink href="/">Filmes</HeaderLink>
      </LeftAlign>
      <RightAlign>
        <SearchIcon onClick={toggleSearch} />
        <SearchInput $show={showSearch}>
          <MovieSearch />
        </SearchInput>
        <LogoutIcon onClick={handleLogout} />
      </RightAlign>
    </Container>
  );
};

export default Header;
