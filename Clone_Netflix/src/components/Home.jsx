// src/pages/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import MovieCategory from '../components/HomeComponents/MovieCategories.jsx';

const Container = styled.div`
  padding: 20px;
  background-color: #141414;
`;

const HomePage = () => {
  return (
    <Container>
      <MovieCategory category="popular" />
      <MovieCategory category="top_rated" />
    </Container>
  );
};

export default HomePage;
