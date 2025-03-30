import { gerarNomeAleatorio, gerarEmailAleatorio } from "../utils/funcoes";


const nomeAleatorio = gerarNomeAleatorio();
const emailAleatorio = gerarEmailAleatorio();
Cypress.Commands.add('cadastroUsuario', (token) => {         
  cy.request({ 
    method: 'POST',
    url: 'http://localhost:3000/usuarios',
    failOnStatusCode: false,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "*/*"
    },
    body: {
      "nome": nomeAleatorio,
      "email": emailAleatorio,
      "password": "testesssss",
      "administrador": "true",
      // ...overrides,
    }   
  })
});
