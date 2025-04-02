const Joi = require("joi");

const favoriteSchema = Joi.object({
    id: Joi.number().required("Falta el id de la pelicula"),
    title: Joi.string().required("Falta el título de la pelicula"),
    overview: Joi.string().allow(""),
    release_date: Joi.string().isoDate().required(),
});

module.exports =  favoriteSchema ;
