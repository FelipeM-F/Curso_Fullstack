import axios from 'axios'; 

const apiKey = 'bfb3ab6e44a3c35fa789df90c885c477';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey,
        language: 'pt-BR',
    },
});


export const getMoviesByCategory = async (categoryOrGenreId) => {
    try {
        let response;
        if (categoryOrGenreId === "popular" || categoryOrGenreId === "top_rated") {
            response = await tmdb.get(`/movie/${categoryOrGenreId}`);
        } else {
            response = await tmdb.get('/discover/movie', {
                params: {
                    with_genres: categoryOrGenreId,
                },
            });
        }

        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies by category or genre:", error);
        return [];
    }
};

export const getMovieDetails = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  };

  export const getMovieVideos = async (id) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`);
        const data = await response.json();
        // Verifica se há vídeos e se eles são do tipo "Trailer"
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        return trailer;
    } catch (error) {
        console.error("Error fetching movie videos:", error);
        return null;
    }
};


export const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: apiKey,
            query: query,
          },
        }
      );
      return response.data.results;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  export const getSimilarMovies = async (id) => {
    try {
        const response = await tmdb.get(`https://api.themoviedb.org/3/movie/${id}/recommendations`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching similar movies:", error);
        return [];
    }
};


