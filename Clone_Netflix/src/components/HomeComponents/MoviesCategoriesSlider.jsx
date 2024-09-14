import { useEffect, useState, useRef } from "react";
import { getMoviesByCategory, getMovieDetails, getMovieVideos } from "../../services/MovieAPI";
import styled from "styled-components";
import MovieCard from "./MovieCardSlider";
import MovieModal from "./MovieModal";

const Row = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;

const MovieSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap;
  padding-bottom: 10px;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const LeftButton = styled(NavButton)`
  left: 0;
`;

const RightButton = styled(NavButton)`
  right: 0;
`;

const MovieCategory = ({ genreId, genreName }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getMoviesByCategory(genreId);
      setMovies(fetchedMovies);
    };

    fetchMovies();
  }, [genreId]);
  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getMoviesByCategory(genreId);
      setMovies(fetchedMovies);
    };

    fetchMovies();
  }, [genreId]);


  const openModal = async (movieId) => {
    const movieDetails = await getMovieDetails(movieId);
    const movieVideo = await getMovieVideos(movieId);
    setSelectedMovie({ ...movieDetails, video: movieVideo });
};

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
  };

  const drag = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 4;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const endDrag = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  const handleTouchStart = (e) => {
    startDrag(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    drag(e.touches[0]);
  };

  const handleTouchEnd = () => {
    endDrag();
  };

  return (
    <Row>
      <Title>{genreName}</Title>
      <LeftButton
        onClick={() =>
          sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
        }
      >
        &lt;
      </LeftButton>
      <MovieSlider
        ref={sliderRef}
        onMouseDown={startDrag}
        onMouseMove={drag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => openModal(movie.id)}
          />
        ))}
      </MovieSlider>
      <RightButton
        onClick={() =>
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
        }
      >
        &gt;
      </RightButton>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </Row>
  );
};

export default MovieCategory;
