const request = require("supertest");
/**
 * Função para realizar uma requisição GET e retornar o corpo da resposta.
 * @param {string} path - O caminho da API para a requisição.
 * @returns {Promise<string>} - O corpo da resposta como string.
 */
const baseURL = "https://reqres.in/api";

async function getRequest(path) {
  try {
    const response = await request(baseURL)
      .get(path)
      .set('accept', 'application/json')
      .set('x-api-key', 'reqres-free-v1')
      .expect('Content-Type', "application/json; charset=utf-8")
      .expect(200);

    return response.body;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

module.exports = {
  getRequest
}