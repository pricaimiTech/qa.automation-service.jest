const request = require("supertest");
/**
 * Função para realizar uma requisição GET e retornar o corpo da resposta.
 * @param {string} path - O caminho da API para a requisição.
 * @returns {Promise<string>} - O corpo da resposta como string.
 */
async function getRequest(path) {
  try {
    const response = await request("https://automationexercise.com/api")
      .get(path)
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
    
    return response.text;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}

module.exports = {
  getRequest
}