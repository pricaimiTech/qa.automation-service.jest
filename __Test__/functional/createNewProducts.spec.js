const { postRequest } = require('../../src/helpers/request');
const { validarSchemaRequest } = require('../../src/helpers/schemaValidador');
const responseSchema = require("../../src/schema/products/newProduct.schema.json");
const {generateValideProduct} = require('../../src/data/product.data');
const { parse } = require('@babel/core');

describe('Create new products', function () {

    let response;
    let userData;
    let payload;
    const path = '/products';

    beforeAll(() => {
        userData = generateValideProduct()
        payload = {
            "id": userData.id,
            "title": userData.title,
            "price": parseFloat(userData.price),
            "description": userData.description,
            "category": userData.category,
            "image": userData.image
        }
    })

    it('[CT-001] Criar novo produto', async () => {
        response = await postRequest(path, payload);
        console.log(response);
    });

    it('[CT-002] Validar contrato do novo produto criado', async () => {
        validarSchemaRequest(response, responseSchema)
    });
});