const Joi = require('joi');

function schemaValidador(data, schema) {
    try {
        Joi.assert(JSON.parse(data), schema)
    } catch (error) {
        throw new Error(`Schema validation failed: ${error.message}`);
    }
}


module.exports = {
    schemaValidador
};