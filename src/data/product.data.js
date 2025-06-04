const {
    faker
} = require('@faker-js/faker');

/**
 * Gera um objeto de dados de usuário válido para o endpoint de criação de conta.
 * @param {object} overrides - Um objeto com campos para sobrescrever os valores padrão gerados pelo Faker.
 * @returns {object} Objeto de dados do usuário.
 */
function generateValideProduct(overrides = {}) {
    const defaultProduct = {
        id: faker.number.int(10),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.productAdjective(),
        image: "http://example.com"
    };

    return {
        ...defaultProduct,
        ...overrides
    };
}

module.exports = {
    generateValideProduct,
};