const { getFavorites, saveFavorites } = require("../models/favoriteModel");

const addFavorite = (req, res) => {
  try {
    const { id, title, overview, release_date } = req.body;
    
    const email = req.user.email;
    const favorites = getFavorites();

    if (!favorites[email]) {
      favorites[email] = [];
    }

    if (favorites[email].some((fav) => fav.id === id)) {
      return res.status(400).json({ error: "Película ya está en favoritos" });
    }

    const newFavorite = {
      id,
      title,
      overview,
      release_date,
      addedAt: new Date().toISOString(),
    };

    favorites[email].push(newFavorite);
    saveFavorites(favorites);

    res.status(201).json({ message: "Película agregada a favoritos", newFavorite });
  } catch (error) {
    res.status(500).json({ error: "Error guardando favoritos" });
  }
};

const getUserFavorites = (req, res) => {
  try {
    const email = req.user.email; 
    const favorites = getFavorites();

    const userFavorites = favorites[email] || []; 

    res.json(userFavorites);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo favoritos" });
  }
};

module.exports = { addFavorite, getUserFavorites };
