let tokenValue;
beforeEach(() => {
  cy.login().then(authorization => {  // Obter token para criar um cartão
    tokenValue = authorization;
    console.log('Token recebido:', tokenValue)
  });
});

context('Cenários positivo', () => {
  it('Cadastrar usuário com sucesso!', () => {
    cy.cadastroUsuario(tokenValue).then((response) => {
      expect(response.status).to.equal(201)
      const jsonData = response.body
      expect(jsonData).to.have.property('message').and.to.equal('Cadastro realizado com sucesso')
      expect(jsonData).to.have.property('_id').and.to.be.a('string')
    });
  });

  it('Deletar um usuário', () => {
    cy.cadastroUsuario(tokenValue).then((response) => {
      expect(response.status).to.equal(201)
      const jsonData = response.body
      expect(jsonData).to.have.property('message').and.to.equal('Cadastro realizado com sucesso')
      expect(jsonData).to.have.property('_id').and.to.be.a('string')
      const idUsuario = jsonData._id
      cy.request({
        method: 'DELETE',
        url: `http://localhost:3000/usuarios/${idUsuario}`,
        headers: {
          Authorization: `Bearer ${tokenValue}`,
          Accept: "*/*"
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(200)
        const jsonData = response.body
        expect(jsonData).to.have.property('message').and.to.equal('Registro excluído com sucesso')
      });
    })
  });

  it('Buscar um usuário por ID', () => {
    cy.cadastroUsuario(tokenValue).then((response) => {
      expect(response.status).to.equal(201)
      const jsonData = response.body
      expect(jsonData).to.have.property('message').and.to.equal('Cadastro realizado com sucesso')
      expect(jsonData).to.have.property('_id').and.to.be.a('string')
      const idUsuario = jsonData._id
      cy.request({
        method: 'GET',
        url: `http://localhost:3000/usuarios/${idUsuario}`,
        headers: {
          Authorization: `Bearer ${tokenValue}`,
          Accept: "*/*"
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(200)
        const jsonData = response.body
        expect(jsonData).to.have.property('nome').and.to.be.a('string').and.to.not.be.empty;
        expect(jsonData).to.have.property('email').and.to.be.a('string').and.to.not.be.empty;
        expect(jsonData).to.have.property('password').and.to.be.a('string').and.to.not.be.empty;
        expect(jsonData).to.have.property('administrador').and.to.be.a('string').and.to.not.be.empty;
        expect(jsonData).to.have.property('_id').and.to.be.a('string').and.to.not.be.empty;
      });
    })
  });
});

context('Cenários negativos', () => {
  it('Não ser possível cadastrar usuário sem nome', () => {
    cy.cadastroUsuario(tokenValue, {
      nome: undefined,
    }).then((response) => {
      expect(response.status).to.equal(400)
      const jsonData = response.body
      expect(jsonData).to.have.property('nome').and.to.equal('nome é obrigatório')
    });
  });

  it('Não ser possível cadastrar um usuário sem email', () => {
    cy.cadastroUsuario(tokenValue, {
      email: undefined,
    }).then((response) => {
      expect(response.status).to.equal(400)
      const jsonData = response.body
      expect(jsonData).to.have.property('email').and.to.equal('email é obrigatório')
    });
  });

  it('Não possível cadastar usuário sem senha', () => {
    cy.cadastroUsuario(tokenValue, {
      password: undefined,
    }).then((response) => {
      expect(response.status).to.equal(400)
      const jsonData = response.body
      expect(jsonData).to.have.property('password').and.to.equal('password é obrigatório')
    });
  });

  it.only('Não ser possível deletar um usuário inexistente', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3000/usuarios/8500',
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${tokenValue}`,
        Accept: "*/*"
      },
      
    }).then((response) => {
      expect(response.status).to.equal(200)
      const jsonData = response.body
      expect(jsonData).to.have.property('message').and.to.equal('Nenhum registro excluído')
    })
  });
});