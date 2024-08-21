// src/components/MovieCategory.jsx
import React, { useEffect, useState } from 'react';
import { getMoviesByCategory } from '../../services/MovieAPI';
import styled from 'styled-components';

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

const MovieCategory = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMoviesByCategory(category);
      setMovies(movies);
    };

    fetchMovies();
  }, [category]);

  return (
    <Row>
      <Title>{category} Movies</Title>
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
  );
};

export default MovieCategory;
