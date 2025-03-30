// Função para gerar nomes aleatórios
function gerarNomeAleatorio() {
  const nomes = [
    'Fulano', 'Beltrano', 'Ciclano', 'João', 'Maria', 'Ana', 'Beatriz',
    'Carlos', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Isabela', 'Juliana',
    'Lucas', 'Marcos', 'Natália', 'Otávio', 'Paula', 'Rafael', 'Sabrina',
    'Thiago', 'Vanessa', 'Yasmin', 'Daniel', 'Felipe', 'Gustavo', 'Larissa',
    'Mateus', 'Ricardo'
  ];
  const sobrenomes = [
    'Silva', 'Souza', 'Pereira', 'Costa', 'Oliveira', 'Santos',
    'Almeida', 'Andrade', 'Araújo', 'Barbosa', 'Batista', 'Borges', 'Campos', 'Cardoso',
    'Carvalho', 'Castro', 'Cavalcante', 'Correia', 'Dias', 'Duarte', 'Fernandes',
    'Ferreira', 'Fonseca', 'Gomes', 'Lima', 'Martins', 'Mendes', 'Miranda',
    'Monteiro', 'Nascimento'
  ];
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  return `${nome} ${sobrenome}`;
}

// Função para gerar e-mails aleatórios
function gerarEmailAleatorio() {
  const dominios = ['qa.com.br', 'teste.com', 'email.com', 'qa.com', 'ble.com', 'bli.com.br', 'atas.com'];
  const nomeUsuario = `usuario${Date.now()}`;
  const dominio = dominios[Math.floor(Math.random() * dominios.length)];
  return `${nomeUsuario}@${dominio}`;
}

export {
  gerarNomeAleatorio,
  gerarEmailAleatorio
}