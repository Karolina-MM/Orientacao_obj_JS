import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Karolina", "Kaah@aa.com", "2003-01-01")
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Cássio', 'ca@ca.com')
console.log(dadosFicticios);

// const novoAdmin = new Admin("Carlos", "Car@los.com", "2002-08-09")
// console.log(novoAdmin.exibirInfos());

// const novaDocente = new Docente("Ana", "ana@aa.com", "2000-05-01")
// console.log(novaDocente.exibirInfos());