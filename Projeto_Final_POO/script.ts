import { BancoDeDados } from './bancoDeDados'
import { Pessoa } from './pessoa'

let newBanco = new BancoDeDados ()

newBanco.AdicionarPessoa(new Pessoa("Wesley", 19, "wesleyprofessor@email.com"))
newBanco.AdicionarPessoa(new Pessoa("Thais", 15, "Thaisprofessora@email.com"))
newBanco.AdicionarPessoa(new Pessoa("Cleiton", 35, "cleitonaluno@email.com"))


newBanco.ListarPessoas()

newBanco.AtualizarPessoa("Wesley", 20, "wesleymestre@email.com")
console.log(newBanco.BuscarPorNome("Wesley"));

newBanco.DeletarPessoa("Cleiton")
newBanco.ListarPessoas()
