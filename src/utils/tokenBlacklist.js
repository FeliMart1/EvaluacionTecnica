const NodeCache = require("node-cache");
const blacklist = new NodeCache({ stdTTL: 3600 }); 

const addToBlacklist = (token) => {
  blacklist.set(token, true);
};

const isBlacklisted = (token) => {
  return blacklist.has(token);
};

module.exports = { addToBlacklist, isBlacklisted };
