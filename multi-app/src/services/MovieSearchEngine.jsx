import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP

const useMovieInfo = () => {
    const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
    const [error, setError] = useState(null); // Define o estado para armazenar erros

    // Função para buscar filmes
    const searchMovies = async (query) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=403abbfe`); // Faz uma requisição GET para a API OMDB
            setMovies(response.data.Search); // Armazena os dados dos filmes no estado movies
        } catch (error) {
            console.error("Error fetching movie data:", error); // Exibe um erro no console em caso de falha
            setError("Error fetching movie data"); // Armazena a mensagem de erro no estado error
        }
    };

    return {
        movies,
        searchMovies,
        error,
    };
};

export default useMovieInfo;
