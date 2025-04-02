const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: { error: "Demasiadas peticiones, intenta más tarde" },
});

module.exports = limiter;
