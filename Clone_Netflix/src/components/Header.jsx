import styled from "styled-components";
import logo from '/logo.png'; 
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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

const Footer = () => {
  return (
    <Container>
      <NetflixIcon href="#">
        <LogoImage src={logo} alt="Netflix" />
      </NetflixIcon>
    </Container>
  );
};

export default Footer;
