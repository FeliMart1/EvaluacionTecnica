require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const rateLimiter = require("./middlewares/rateLimitMiddleware");
const errorHandler = require("./middlewares/errorMiddleware");


const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/auth", authRoutes);
app.use("/api", movieRoutes);
app.use("/api", favoriteRoutes);
app.use(rateLimiter);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
