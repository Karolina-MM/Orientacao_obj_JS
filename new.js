function User (nome, email) {
    this.nome = nome;
    this.email = email;
  
    this.exibirInfos = function() {
      return `${this.nome}, ${this.email}`
    }
  }
  
  const novoUser = new User('Karolina', 'kaah.com')
  console.log(novoUser.exibirInfos());

  //O operador new serve para criar instâncias de um objeto a partir de uma função construtora.