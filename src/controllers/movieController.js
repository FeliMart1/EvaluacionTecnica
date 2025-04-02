const { fetchMoviesFromTMDB } = require("../services/movieService");

const handleGetMovies = async (req, res) => {
  try {
    const keyword = req.query.keyword || ""; 
    const movies = await fetchMoviesFromTMDB(keyword);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo películas" });
  }
};

module.exports = { handleGetMovies };

