const assert = require('assert');
const {
    postRequest
} = require('../../src/helpers/request');
const { generateValidUserData } = require('../../src/data/user.data');
const { validarSchemaRequest } = require('../../src/helpers/schemaValidador');
const registerSchema = require("../../src/schema/user/registerSchema.json");


describe('Register users', function () {

    let response;
    const registerPath = '/register';

    let userData;

    beforeAll(() => {
        userData = generateValidUserData();
    });

    it('[CT-001] Realizar o registro do novo usuário', async () => {
        response = await postRequest(registerPath, {
            "username": "string",
            "email": "string",
            "password": "string"
        })
    });

    it('[CT-002] Registro realizado com sucesso', function () {
        console.log(response);
        // assert.strictEqual(response.data.length, 2);
    });

    it('[CT-CONTRACT-002] Validar o contrato para o registro de novo usuário', function () {
        validarSchemaRequest(response, registerSchema)
    });
});

