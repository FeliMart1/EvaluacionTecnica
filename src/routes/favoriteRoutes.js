const express = require("express");
const { addFavorite, getUserFavorites } = require("../controllers/favoriteController");
const authMiddleware = require("../middlewares/authMiddleware");
const Joi = require("joi");
const validate = require("../middlewares/validateMiddleware");
const favoriteSchema = require("../schemas/favoriteSchema.js");

const router = express.Router();
  
router.post("/favorites", authMiddleware, validate(favoriteSchema), addFavorite);
router.get("/favorites", authMiddleware, getUserFavorites);

module.exports = router;
