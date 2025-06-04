# QA Automation Service com Jest

Este repositório contém um framework de automação de testes para APIs, utilizando Jest, Supertest e JsonSchema.


### Documentações para estudar

- **Documentação assert**: [documentação node/assert](https://nodejs.org/api/assert.html)
- **API Utilizada**: [API de exemplo](reqres.in)

### Ferramentas Principais

- **Jest**: Utilizado para execução dos testes.
- **Supertest**: Utilizado para requisições HTTP em testes.
- **JsonSchema**: Utilizado para validação de conformidade das respostas das APIs.


### Arquitetura do projeto

```
qa.automation-service.jest/
├── __Test__/
│   ├── contract/
│   │   └── listUser.spec.js
│   ├── functional/
│       └── listUser.spec.js
├── coverage/
├── node_modules/
├── src/
│   ├── data/
│   │   └── user.data.js
│   ├── helpers/
│   │   ├── random.js
│   │   ├── request.js
│   │   └── schemaValidador.js
│   └── schema/user/
│       └── userSchema.json
├── .babelrc
├── jest.config.js
├── package.json
└── README.md
```

### Descrição dos Diretórios

- `__Test__`: Contém os testes de contrato e funcionais.
- `contract`: Testes de contrato para verificar conformidade com os esquemas.
- `functional`: Testes funcionais para validar funcionalidades completas.
- `coverage`: Armazena os relatórios de cobertura de código.
- `data`: Inclui dados de mockup para testes.
- `helpers`: Contém utilitários para suporte nas funcionalidades de teste.
- `schema/user`: Armazena os esquemas JSON para validação de respostas.

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




### Observações Finais
A utilização eficaz deste framework requer familiaridade com Jest, Supertest, e a [API de exemplo](reqres.in). Sinta-se à vontade para personalizar e expandir o framework conforme necessário para atender às necessidades específicas do seu projeto.
