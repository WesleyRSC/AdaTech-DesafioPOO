import { Banco } from "./banco";
import { Pessoa } from "./pessoa";

const baseDados = new Banco()

baseDados.AdicionarPessoa(new Pessoa("Wesley", 24, "teste@teste.com"))
baseDados.AdicionarPessoa(new Pessoa("Wesley2", 24, "teste@teste.com"))

baseDados.ListarPessoas();



baseDados.AdicionarPessoa(new Pessoa("Wesley", 24, "teste@teste.com"))

