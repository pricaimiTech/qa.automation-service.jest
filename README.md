# qa.automation-service.jest

### Descrição
Este repositório é um framework base para automação de testes de uma API REST, utilizando Jest e Supertest. Destina-se a validar tanto o contrato quanto os testes funcionais da API. O projeto utiliza a API disponibilizada em reqres.in.

### Estrutura do Projeto

- **Nome do Projeto**: qa.automation-service.jest
- **Versão**: 1.0.0
- **Descrição**: Framework para automação de API utilizando Jest + Supertest
- **API Utilizado**: [API de exemplo](reqres.in)

### Scripts Disponíveis

**contract**: Executa testes de contrato localizados em `__Test__/contract/**/*.spec.js`


### Instalação

Para instalar as dependências do desenvolvimento, utilize o seguinte comando:
npm install

Ferramentas e Dependências de Desenvolvimento
As seguintes ferramentas e bibliotecas são utilizadas neste projeto:

- **@faker-js/faker**: ^9.8.0 — Gerador de dados fictícios para testes.
- **chai**: ^5.2.0 — Assertivas para testes.
- **jest**: ^29.7.0 — Framework de teste.
- **joi**: ^17.13.3 — Validação de esquemas de objeto.
- **moment**: ^2.30.1 — Manipulação de datas.
- **supertest**: ^7.1.1 — Testes de API HTTP.


### Como utilizar

- Faça um fork do projeto.

## Utilizando IA para te auxiliar

### Para gerar o contrato 

Para gerar o schema com o Joi. Primeiro de o contexto e a ordem. 
```
Você um especialista de testes de contrato utilizando joi irei te passar o response e  você me passa como que fica o schema. 
```

Depois passe o response da sua API. O chat irá te dar o schema utilizando a lib do Joi.


### Observações Finais
A utilização eficaz deste framework requer familiaridade com Jest, Supertest, e a [API de exemplo](reqres.in). Sinta-se à vontade para personalizar e expandir o framework conforme necessário para atender às necessidades específicas do seu projeto.
