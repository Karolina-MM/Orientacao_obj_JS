export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
      this.#nome = nome
      this.#email = email
      this.#nascimento = nascimento
      this.#role = role || "estudante"
      this.#ativo = ativo
    }
  
    //indicamos que um atributo ou propriedade de uma classe é privada utilizando #

    //get é uma palavra-chave que usamos para criar um tipo especial de método que é somente leitura.

    get nome() {
      return this.#nome
    }
  
    get email() {
      return this.#email
    }
  
    get nascimento() {
      return this.#nascimento
    }
  
    get role() {
      return this.#role
    }
  
    get ativo() {
      return this.#ativo
    }
  
    set nome(novoNome) {
      if (novoNome === "") {
        throw new Error('formato do nome não é válido')
      }
      this.#nome = novoNome
    }
  
    // exibirInfos() {
    //   return `${this.nome}, ${this.email}`
    // }
  
    exibirInfos() {
      if (this.role === "estudante") {
        return `dados estudante: ${this.nome}`
      }
      if (this.role === "admin") {
        return `dados admin: ${this.nome}, ${this.role}`
      }
      if (this.role === "docente") {
        return `dados docente: ${this.nome}, ${this.email}`
      }
    }
    static exibirInfosGenericas(nome, email) {
      return `${nome}, ${email}`
    }
  }
  
  
  const novoUser = new User('Karol', 'kaa@ah.com', '2003-01-16')
  // console.log(novoUser);
  // console.log(novoUser.exibirInfos());
  
  // console.log(User.prototype.isPrototypeOf(novoUser));


  //Os getters nunca levam nenhum parâmetro porque nós só os acessamos. Portanto, quando usamos get, acessamos sem definir parâmetros.
  //O set sempre aceita apenas um parâmetro, que é o dado que desejamos modificar. 