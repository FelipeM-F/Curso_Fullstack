import React, { useEffect, useState } from 'react';
import { getMoviesByCategory, useMovieInfo } from '../services/MovieAPI'; // Importa o serviço criado
import styled from 'styled-components';
import MovieCategory from './HomeComponents/MovieCategories';

const Container = styled.div`
  padding: 20px;
  background-color: #141414;
`;

const Row = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;

const MoviePoster = styled.img`
  width: 200px;
  border-radius: 10px;
  margin-right: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const { movies, searchMovies, error } = useMovieInfo(); // Usa o custom hook para buscar filmes
  const [query, setQuery] = useState(''); // Estado para armazenar o termo de busca

  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await getMoviesByCategory('popular');
      const topRated = await getMoviesByCategory('top_rated');
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
    };

    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query); // Chama a função de busca ao submeter o formulário
  };

  return (
    <Container>
      <SearchContainer>
        <form onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </SearchContainer>

      {error && <p>{error}</p>}

      <Row>
        <Title>Search Results</Title>
        <div>
          {movies.map(movie => (
            <MoviePoster
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>
      </Row>
      <MovieCategory category="popular" />
      <MovieCategory category="top_rated" />
    </Container>
  );
};

export default HomePage;
