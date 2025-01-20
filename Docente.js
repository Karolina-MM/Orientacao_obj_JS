import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = "true") {
    super(nome, email, nascimento, role, ativo)
  }

  aprovarEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`
  }
}

// const novaDocente = new Docente("Ana", "a@a.com", "2000-01-01")
// console.log(novaDocente.aprovarEstudante('Julia', 'JavaScript'));


// Nem sempre uma classe vai precisar de construtor para ser instanciada, e nem toda classe vai precisar de métodos próprios.