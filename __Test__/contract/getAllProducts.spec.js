const { allProductsListResponseSchema } = require('../../src/schema/products/productSchema');
const { getRequest } = require('../../src/helpers/request');
const { schemaValidador } = require('../../src/helpers/schemaValidador');

describe('API 1: Validar a busca de todos produtos da lista', function () {

    let response;
    const path = '/productsList';

    beforeAll(async () => {
        response = await getRequest(path);
    });

    it('[CT-CONTRACT-001] Validar o contrato do retorno de todos os produtos', function () {
        console.log('Response:', response);
        schemaValidador(response, allProductsListResponseSchema);

    });
});