import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import useMovieInfo from '../services/MovieSearchEngine';

// Define o estilo do container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`;

// Define o estilo do título
const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do botão
const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define o estilo do container dos filmes
const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; /* Ajuste a altura máxima conforme necessário */
  overflow-y: auto; /* Adiciona rolagem vertical se necessário */
  width: 100%;
`;

// Define o estilo do cartão de filme
const MovieCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 180px; /* Ajuste a largura conforme necessário */
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 10px;
    max-width: 100%; /* Ajusta o tamanho da imagem para caber dentro do cartão */
    height: auto;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const MovieSearch = () => {
  const { movies, searchMovies, error } = useMovieInfo(); // Desestrutura as funções e o estado de useMovieInfo
  const [query, setQuery] = useState(''); // Define o estado para a consulta de busca

  // Função chamada ao clicar no botão de busca
  const handleSearch = () => {
    searchMovies(query); // Chama a função searchMovies com o nome do filme procurado
  };

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
      />
      <Button onClick={handleSearch}>Search</Button> {/* Botão que chama a função handleSearch quando clicado */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe mensagens de erro, se houver */}
      <MoviesContainer>
        {movies && movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
          <MovieCard key={movie.id}> {/* Use a propriedade 'id' como chave, pois 'imdbID' pode não existir */}
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={`${movie.title} Poster`} 
            /> {/* Exibe o pôster do filme */}
            <h3>{movie.title}</h3> {/* Exibe o título do filme */}
            <p>{movie.release_date.split('-')[0]}</p> {/* Exibe o ano do filme */}
          </MovieCard>
        ))}
      </MoviesContainer>
    </Container>
  );
};

export default MovieSearch;
