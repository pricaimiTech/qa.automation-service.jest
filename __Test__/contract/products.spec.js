const { getRequest } = require('../../src/helpers/request');
const { validarSchemaRequest } = require('../../src/helpers/schemaValidador');
const responseSchema = require("../../src/schema/products/products.schema.json")


describe('Get all products', function () {

    let response;
    const path = '/products';

    beforeAll(async () => {
        response = await getRequest(path);
    });

    it('[CT-CONTRACT-001] Validar o contrato para a busca de todos os produtos', function () {
        validarSchemaRequest(response, responseSchema)
    });
});