const axios = require("axios");

const TMDB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
const TMDB_POPULAR_URL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = process.env.TMDB_API_KEY;

const fetchMoviesFromTMDB = async (keyword = "") => {
  try {
    const url = keyword ? TMDB_SEARCH_URL : TMDB_POPULAR_URL;
    
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        query: keyword || undefined,
        language: "es-ES",
        page: 1,
      },
    });

    console.log("Respuesta de TMDB:", response.data); 

    const movies = response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      suggestionScore: Math.floor(Math.random() * 100),
    }));

    return movies.sort((a, b) => b.suggestionScore - a.suggestionScore);
  } catch (error) {
    console.error("Error en la petición:", error.response?.data || error.message);
    throw new Error("No se pudieron obtener las películas");
  }
};

module.exports = { fetchMoviesFromTMDB };
