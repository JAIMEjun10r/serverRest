context('Cenário positivo', () => {
  it('Login com sucesso', () => {
    cy.login()
  });
})

context('Cenários de erro', () => {
  it('Email invállido', () => {
    cy.loginCenariosNegativos({ email: 'fulanoqa.com' }).then((response) => {
      expect(response.status).to.equal(400)
      const jsonData = response.body
      expect(jsonData).to.have.property('email').and.to.equal('email deve ser um email válido')
    });
  })

  it('Senha incorreta', () => {
    cy.loginCenariosNegativos({ password: '123456' }).then((response) => {
      expect(response.status).to.equal(401)
      const jsonData = response.body
      expect(jsonData).to.have.property('message').and.to.equal('Email e/ou senha inválidos')
    });
  });

  it('Campos vazios', () => {
    cy.loginCenariosNegativos({ email: '', password: '' }).then((response) => {
      expect(response.status).to.equal(400)
      const jsonData = response.body
      expect(jsonData).to.have.property('email').and.to.equal('email não pode ficar em branco')
      expect(jsonData).to.have.property('password').and.to.equal('password não pode ficar em branco')
    });
  });
});
