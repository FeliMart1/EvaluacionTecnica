const bcrypt = require("bcrypt");
const { getUsers, saveUsers } = require("../models/userModel");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { addToBlacklist } = require("../utils/tokenBlacklist");
const path = require("path");
const registerSchema = require(path.join(__dirname, "../schemas/registerSchema"));
const loginSchema = require(path.join(__dirname, "../schemas/loginSchema"));


const registerUser = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    let { email, firstName, lastName, password } = req.body;
    const users = getUsers();

    if (users.find((user) => user.email === email)) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ email, firstName, lastName, password: hashedPassword });
    saveUsers(users);

    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (err) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



const loginUser = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, password } = req.body;
    const users = getUsers();

    const user = users.find((u) => u.email === email);
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(400).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const logoutUser = (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (token) addToBlacklist(token);
  res.json({ message: "Logout exitoso" });
};

module.exports = { registerUser, loginUser, logoutUser };
