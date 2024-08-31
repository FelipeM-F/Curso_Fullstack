import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieCategory from "./HomeComponents/MoviesCategoriesSlider.jsx";
import Header from "../components/HomeComponents/Header.jsx";
import ScrollToTop from '../components/HomeComponents/ScrollToTopButton.jsx';
import Footer from "./Footer.jsx";

const Container = styled.div`
  padding: 20px;
  background-color: #141414;
`;

const HomePage = () => {
  const [genreIndex, setGenreIndex] = useState(0);
  const [loadedGenres, setLoadedGenres] = useState([]);

  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  useEffect(() => {
    const loadMoreGenres = () => {
      if (genreIndex < genres.length) {
        const newGenre = genres[genreIndex];
        setLoadedGenres((prevLoadedGenres) => {
          if (!prevLoadedGenres.some((genre) => genre.id === newGenre.id)) {
            return [...prevLoadedGenres, newGenre];
          }
          return prevLoadedGenres;
        });
        setGenreIndex((prevIndex) => prevIndex + 1);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        loadMoreGenres();
      }
    };

    window.addEventListener("scroll", handleScroll);

    loadMoreGenres();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [genreIndex]);

  return (
    <Container>
      <Header />
      <MovieCategory genreId="popular" genreName="Popular" />
      <MovieCategory genreId="top_rated" genreName="Top Rated" />
      {loadedGenres.map((genre) => (
        <MovieCategory
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
        />
      ))}
      <ScrollToTop />
      <Footer />
    </Container>
  );
};

export default HomePage;
