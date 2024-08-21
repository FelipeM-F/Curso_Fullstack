import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP

const apiKey = 'bfb3ab6e44a3c35fa789df90c885c477';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey,
        language: 'pt-BR', // Pode ajustar o idioma conforme necessário
    },
});

// Função para buscar filmes por categoria
export const getMoviesByCategory = async (category) => {
    const response = await tmdb.get(`/movie/${category}`);
    return response.data.results;
};

// Custom hook para buscar informações sobre filmes
export const useMovieInfo = () => {
    const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
    const [error, setError] = useState(null); // Define o estado para armazenar erros

    // Função para buscar filmes
    const searchMovies = async (query) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: apiKey,
                    query: query,
                },
            });
            console.log(response.data.results);
            setMovies(response.data.results); // Armazena os dados dos filmes no estado movies
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


