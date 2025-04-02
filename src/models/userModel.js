const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../../data/users.json");

const getUsers = () => {
  try {
    if (!fs.existsSync(usersFile)) return [];
    const data = fs.readFileSync(usersFile, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error leyendo users.json:", error);
    return [];
  }
};

const saveUsers = (users) => {
  try {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf8");
    console.log("✅ Usuario guardado en users.json"); 
  } catch (error) {
    console.error("❌ Error guardando users.json:", error);
  }
};

module.exports = { getUsers, saveUsers };
