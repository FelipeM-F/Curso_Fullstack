import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 0;
`;

const LanguageSelector = styled.div`
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <div>Dúvidas? Ligue 0800 591 2876</div>
      </Section>
      <Section>
        <FooterLink href="#">Perguntas frequentes</FooterLink>
        <FooterLink href="#">Preferências de cookies</FooterLink>
      </Section>
      <Section>
        <FooterLink href="#">Central de Ajuda</FooterLink>
        <FooterLink href="#">Informações corporativas</FooterLink>
      </Section>
      <Section>
        <FooterLink href="#">Termos de Uso</FooterLink>
        <FooterLink href="#">Privacidade</FooterLink>
      </Section>
      <LanguageSelector>
        <button>
          <span role="img" aria-label="language">🌐</span> Português
        </button>
      </LanguageSelector>
    </Container>
  );
};

export default Footer;
