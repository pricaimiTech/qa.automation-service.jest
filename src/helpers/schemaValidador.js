const { Validator } = require("jsonschema");
const v = new Validator();

function validarSchemaRequest(request, schema) {
    const resultado = v.validate(request, schema);

    if (resultado.valid) {
        console.log("O request é válido.");
    } else {
        console.error("O request é inválido. Erros:");
        resultado.errors.forEach((error, index) => {
            console.error(`${index + 1}. ${error.stack}`);
        });
    }

    return resultado.valid;
}

module.exports = {
    validarSchemaRequest
};