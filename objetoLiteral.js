const user = {
    nome: "Karol",
    email: "kaah@aa.com",
    nascimento: "2003-01-16",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
      console.log(this.nome, this.email);
    },
  };
  
  // user.exibirInfos()
  
  // const exibir = user.exibirInfos
  // exibir()
  
  const exibir = function() {
    console.log(this.nome, this.email);
  }
  
  const exibirNome = exibir.bind(user);
  exibirNome()

  ///"this" ou "isso", são palavras que só fazem sentido se elas tiverem, literalmente, um contexto atrelado a elas.

  //O bind é um método utilizado para prender, para bind (ligar). 

  //O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this.
  //é possível atribuir um this diferente do contexto atual ao executar a função.

  //O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array.