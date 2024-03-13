import { Pessoa } from "./pessoa";

export class Banco {
  private Dados: Array<Pessoa> = [];

  public AdicionarPessoa(novaPessoa: Pessoa) {
    if (this.Dados.find((pessoa) => pessoa.nome === novaPessoa.nome)) {
      throw new Error("Já existe uma pessoa cadasrada com esse nome");
    }

    this.Dados.push(novaPessoa);
  }

  public ListarPessoas() {
    console.table(this.Dados);
  }

  
  public BuscarPorNome(nome: string) {
    let pessoaEncontrada = this.Dados.find((pessoa) => pessoa.nome == nome);
    if (pessoaEncontrada) {
      return pessoaEncontrada;
    } else {
      throw new Error("Já existe uma pessoa cadasrada com esse nome");
    }
  }

  public DeletePessoa(nome:string){

  }


}
