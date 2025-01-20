const user = {
    nome: "Julia",
    email: "j@j.com",
    nascimento: "2002-05-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
      console.log(this.nome, this.email);
    },
  };
  
  const admin = {
    nome: "Marii",
    email: "m@m.com",
    nascimento: "2008-03-02",
    role: "admin",
    ativo: true,
    criarCurso: function() {
      console.log('curso criado');
    }
  }
  
  Object.setPrototypeOf(admin, user)
  admin.criarCurso()
  admin.exibirInfos()

//setPrototypeOf significa que estamos definindo que admin vai usar como protótipo, ou seja, como a base ou modelo com as especificações dele, o objeto user.

//Então, o primeiro parâmetro de setPrototypeOf é quem vai pegar as propriedades, e o segundo parâmetro é o objeto que vai fornecer as propriedades