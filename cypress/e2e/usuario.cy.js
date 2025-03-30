let tokenValue;
beforeEach(() => {
  cy.login().then(authorization => {  // Obter token para criar um cartão
    tokenValue = authorization;
    console.log('Token recebido:', tokenValue)   
  });
});

context('Cenário positivo', () => {
  it.only('Cadastrar usuário com sucesso!', () => {
    cy.cadastroUsuario(tokenValue).then((response) => {
      expect(response.status).to.equal(201)
      const jsonData = response.body
      expect(jsonData).to.have.property('message').and.to.equal('Cadastro realizado com sucesso')
      expect(jsonData).to.have.property('_id').and.to.be.a('string')
    });
  });
});