
const Joi = require('joi');


const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    password: Joi.string().min(6).required(),
});
  
module.exports = registerSchema;
