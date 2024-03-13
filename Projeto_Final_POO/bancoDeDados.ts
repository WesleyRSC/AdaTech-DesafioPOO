import { Pessoa } from "./pessoa";

export class BancoDeDados {
  private Dados: Array<Pessoa> = [];

  protected AdicionarPessoa(novaPessoa: Pessoa) {
    if (this.Dados.find((pessoa) => pessoa.nome == novaPessoa.nome)) {
      throw new Error("Já existe cadastro de uma pessoa com este nome");
    }
    this.Dados.push(novaPessoa);
    console.log(` Pessoa: ${novaPessoa.nome} - Adicionada com sucesso\n`);
  }

  protected ListarPessoas() {
    console.table(this.Dados);
  }

  protected BuscarPorNome(nome: string): Pessoa | undefined {
    let pessoaEncontrada = this.Dados.find((pessoa) => pessoa.nome == nome);
    if (pessoaEncontrada) return pessoaEncontrada;
    else throw new Error("Não foi encontrada uma pessoa com este nome");
  }

  protected AtualizarPessoa(
    nome: string,
    idade: number | undefined,
    email: string | undefined
  ) {
    let atualizada: boolean = false;
    let pessoaExistente = this.BuscarPorNome(nome)!;

    if (idade != undefined && idade > 0 && pessoaExistente.idade != idade) {
      pessoaExistente.idade = idade;
      atualizada = true;
    }
    if (email != undefined && email?.trim()=="" && pessoaExistente.email != email) {
      pessoaExistente.email = email;
      atualizada = true;
    }

    if (atualizada) {
      let index = this.Dados.findIndex((pessoa) => pessoa.nome == nome);
      this.Dados.splice(index, 1, pessoaExistente);
      console.log(`Pessoa: ${pessoaExistente.nome} - Atualizada com sucesso\n`);
    }
    else{
      console.log("\nNão foram informados email e idade diferentes do cadastro original ou com dados a serem alterados ")
    }
  }

  protected DeletarPessoa(nome: string) {
    if (this.Dados.length == 0) {
      console.log(
        "Sua base de dados está vazia, adicione uma pessoa antes de continuar"
      );
      return;
    }
    let pessoaExistente = this.BuscarPorNome(nome);
    if (pessoaExistente == undefined) {
      throw new Error("Não foi encontrada uma pessoa com este nome");
    }
    let index = this.Dados.findIndex((pessoa) => pessoa.nome == nome);
    this.Dados.splice(index, 1);
    console.log(`Pessoa: ${nome} - Excluída com sucesso\n`);
  }
}
