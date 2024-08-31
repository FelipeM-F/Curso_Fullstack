import styled from "styled-components";
import logo from '/logo.png';

const Container = styled.div`
  width: 100%;
  display: block;
  padding: 20px;
  background-color: transparent;
  margin: auto;
`;

const NetflixIcon = styled.a`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px; // Adjust the size as needed
`;

const Header = () => {
  return (
    <Container>
      <NetflixIcon href="#">
        <LogoImage src={logo} alt="Netflix" />
      </NetflixIcon>
    </Container>
  );
};

export default Header;
