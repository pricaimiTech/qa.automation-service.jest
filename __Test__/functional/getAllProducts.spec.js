const { getRequest } = require('../../src/helpers/request');
const assert = require('assert');

describe('Get all products', function () {

    let response;
    const path = '/products';


    it('[CT-001] Buscar todos os produtos', async () => {
        response = await getRequest(path);
    });

    it('[CT-002] Buscar um produto em especifico', async () => {
        const productId = response[0].id;
        const responseProduct = await getRequest(`${path}/${productId}`);
        assert.equal(responseProduct.id, productId, 'O ID do produto retornado não corresponde ao ID solicitado');
    });
});