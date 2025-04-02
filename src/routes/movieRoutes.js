const express = require("express");
const { handleGetMovies } = require("../controllers/movieController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/movies",authMiddleware, handleGetMovies);

module.exports = router;