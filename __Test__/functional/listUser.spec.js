const assert = require('assert');
const {
    getRequest
} = require('../../src/helpers/request');


describe('List users', function () {

    let response;
    const listUserPath = '/users?page=1&per_page=2';

    beforeAll(async () => {
        response = await getRequest(listUserPath);
    });

    it('[CT-001] Retornou o numero de registros desejados', function () {
        assert.strictEqual(response.data.length, 2);
    });
});
