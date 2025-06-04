const { Validator } = require("jsonschema");
const v = new Validator();
const assert = require("assert");

function validarSchemaRequest(request, schema) {
    const resultado = v.validate(request, schema);

    if (resultado.valid) {
        console.log("A validação de contrato é válido.");
    } else {
        console.error("A validação do contrato é inválido. Erros:");
        resultado.errors.forEach((error, index) => {
            console.error(`${index + 1}. ${error.stack}`);
        });

        // Adiciona assert para falhar o teste
        assert.fail("A validação falhou. Veja os erros acima.");
    }

    return resultado.valid;
}

module.exports = {
    validarSchemaRequest
};