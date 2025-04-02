const fs = require("fs");
const path = require("path");

const favoritesFile = path.join(__dirname, "../../data/favorites.json");

const getFavorites = () => {
  if (!fs.existsSync(favoritesFile)) {
    fs.writeFileSync(favoritesFile, "{}", "utf8"); 
    return {};
  }
  const data = fs.readFileSync(favoritesFile, "utf8");
  return JSON.parse(data);
};

const saveFavorites = (favorites) => {
  fs.writeFileSync(favoritesFile, JSON.stringify(favorites, null, 2), "utf8");
};

module.exports = { getFavorites, saveFavorites };
