Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/login',
    failOnStatusCode: false,
    headers: {
      Accept: "*/*"
    },
    body: {
      "email": "fulano@qa.com",
      "password": "teste"
    }
  }).then(response => {
    expect(response.status).to.equal(200)
    const jsonData = response.body
    expect(jsonData).to.have.property('message').and.to.equal('Login realizado com sucesso')
    expect(jsonData).to.have.property('authorization').and.to.be.a('string')
    return response.body.authorization
  });
});


Cypress.Commands.add('loginCenariosNegativos', (overrides = {}) => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/login',
      failOnStatusCode: false,
      headers: {
        Accept: "*/*"
      },
      body: {
        "email": "fulano@qa.com",
        "password": "teste",
        ...overrides,
      }
    })
});
