const { getRequest } = require('../../src/helpers/request');
const { validarSchemaRequest } = require('../../src/helpers/schemaValidador');
const responseSchema = require("../../src/schema/user/userSchema")


describe('List users', function () {

    let response;
    const listUserPath = '/users?page=1&per_page=2';

    beforeAll(async () => {
        response = await getRequest(listUserPath);
    });

    it('[CT-CONTRACT-001] Validar o contrato para o retorno de todos os usuários', function () {
        validarSchemaRequest(response, responseSchema)
    });
});