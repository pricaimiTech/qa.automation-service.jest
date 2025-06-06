const request = require("supertest");
/**
 * Função para realizar uma requisição GET e retornar o corpo da resposta.
 * @param {string} path - O caminho da API para a requisição.
 * @returns {Promise<string>} - O corpo da resposta como string.
 */
const baseURL = "https://fakestoreapi.com";

async function getRequest(path) {
  try {
    const response = await request(baseURL)
      .get(path)
      .set('accept', 'application/json')
      .set('x-api-key', 'reqres-free-v1')
      .expect('Content-Type', "application/json; charset=utf-8")
      .expect(200);

    return response.text ? JSON.parse(response.text) : response.body;
  } catch (error) {
    console.error(`Erro na requisição: ${path}`, error);
    throw error;
  }
}

async function postRequest(path, body) {

  try {
    const response = await request(baseURL)
      .post(path)
      .set('accept', 'application/json')
      .set('x-api-key', 'reqres-free-v1')
      .send(body)
      .expect('Content-Type', "application/json; charset=utf-8")
      .expect(200)

    return response.text ? JSON.parse(response.text) : response.body;
  } catch (error) {
    console.error(`Erro na requisição: ${path}`, error);
    throw error;
  }
}



module.exports = {
  getRequest,
  postRequest
}