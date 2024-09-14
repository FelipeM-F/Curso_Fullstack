import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  height: 200px;
  width: auto;
  border-radius: 10px;
  padding-inline: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const PosterImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const MovieCard = ({ movie, onClick  }) => {
  return (
    <CardContainer onClick={onClick}>
      <PosterImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
    </CardContainer>

  );
};

export default MovieCard;
