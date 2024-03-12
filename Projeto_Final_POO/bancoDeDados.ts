import { Pessoa } from "./pessoa";

export class BancoDeDados {
  private Dados: Array<Pessoa> = [];

  public AdicionarPessoa(novaPessoa: Pessoa) {
    if (this.Dados.find((pessoa) => pessoa.nome == novaPessoa.nome)) {
      throw new Error("Já existe cadastro de uma pessoa com este nome");
    }
    this.Dados.push(novaPessoa);
  }

  public ListarPessoas() {
    console.table(this.Dados);
  }

  public BuscarPorNome(nome: string): Pessoa | undefined {
    let pessoaEncontrada = this.Dados.find((pessoa) => pessoa.nome == nome);
    if (pessoaEncontrada) return pessoaEncontrada;
    else throw new Error("Não foi encontrada uma pessoa com este nome");
  }

  public AtualizarPessoa(
    nome: string,
    idade: number | undefined,
    email: string | undefined
  ) {
    let pessoaExistente = this.BuscarPorNome(nome);
    if (pessoaExistente == undefined) {
      throw new Error("Não foi encontrada uma pessoa com este nome");
    }
    if (idade != undefined && pessoaExistente.idade != idade) {
      pessoaExistente.idade = idade;
    }
    if (email != undefined && pessoaExistente.email != email) {
      pessoaExistente.email = email;
    }
  }

  public DeletarPessoa(nome: string) {
    let pessoaExistente = this.BuscarPorNome(nome);
    if (pessoaExistente == undefined) {
      throw new Error("Não foi encontrada uma pessoa com este nome");
    }
    let index = this.Dados.findIndex((pessoa) => pessoa.nome == nome);
    this.Dados.splice(index, 1)
    console.log(`${nome} deletado com sucesso`);
    
  }
}
