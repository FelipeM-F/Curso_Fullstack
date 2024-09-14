import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.3)
    ),
    url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinha o conteúdo na parte inferior */
  height: 85%; /* Define uma altura para o modal */
  padding: 20px 20px 10px; /* Padding no topo, laterais e menos padding na parte inferior */

  h2 {
    margin-bottom: 5px; /* Diminui a margem inferior do título */
  }

  p {
    margin-bottom: 5px; /* Diminui a margem inferior dos parágrafos */
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
      <ModalOverlay>
          <ModalContent background={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
              <CloseButton onClick={onClose}>X</CloseButton>
              {movie.video && (
                  <iframe
                      width="100%"
                      height="250px"
                      src={`https://www.youtube.com/embed/${movie.video.key}?autoplay=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ marginBottom: '20px' }}
                  ></iframe>
              )}
              <h2>{movie.original_title}</h2>
              <p>{movie.overview}</p>
              <p>
                  <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p>
                  <strong>Rating:</strong> {movie.vote_average}
              </p>
          </ModalContent>
      </ModalOverlay>
  );
};


export default MovieModal;
