import {useState, useEffect} from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../components/HomeComponents/Header.jsx";
import Footer from "./Footer.jsx";
import { getSimilarMovies } from "../services/MovieAPI"; 

const Container = styled.div`
  padding: 20px;
  background-color: #141414;
`;

const MovieList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieCard = styled.div`
  width: 150px;
  margin: 10px;
  text-align: center;
  color: white;
`;

const MoviePoster = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const SectionTitle = styled.h2`
  margin-top: 40px;
  color: white;
`;

const SearchResults = () => {
  const location = useLocation();
  const movies = location.state?.results || [];
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      const movieId = movies[0]?.id;
      if (movieId) {
        const similar = await getSimilarMovies(movieId);
        setSimilarMovies(similar);
      }
    };

    fetchSimilarMovies();
  }, [movies]);

  return (
    <Container>
      <Header />
      <MovieList>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <MoviePoster
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </MovieCard>
        ))}
      </MovieList>

      {similarMovies.length > 0 && (
        <>
          <SectionTitle>Filmes Similares</SectionTitle>
          <MovieList>
            {similarMovies.map((movie) => (
              <MovieCard key={movie.id}>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </MovieCard>
            ))}
          </MovieList>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default SearchResults;