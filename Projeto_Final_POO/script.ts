import { BancoDeDados } from './bancoDeDados'
import { Pessoa } from './pessoa'

let newBanco = new BancoDeDados ()

newBanco.AdicionarPessoa(new Pessoa("Wesley", 19, "wesleyprofessor@email.com"))
newBanco.AdicionarPessoa(new Pessoa("Thais", 15, "thaisprofessora@email.com"))
newBanco.AdicionarPessoa(new Pessoa("Cleiton", 33, "cleitonaluno@email.com"))
newBanco.AdicionarPessoa(new Pessoa("Naady", 22, "naadyprofessora@email.com"))


newBanco.ListarPessoas()

newBanco.AtualizarPessoa("Wesley", 20, "wesleymestre@email.com")
console.log(newBanco.BuscarPorNome("Wesley"));

newBanco.DeletarPessoa("Cleiton")
newBanco.ListarPessoas()
