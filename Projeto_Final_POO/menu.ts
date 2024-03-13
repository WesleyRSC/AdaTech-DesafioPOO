import { BancoDeDados } from "./bancoDeDados";
import { Pessoa } from "./pessoa";
import promptSync from "prompt-sync";
const prompt = promptSync();

export class Menu extends BancoDeDados{

  private exibirMenu(): void {
    console.log("########### MENU ###########\n");
    console.log("1 • Listar todas as pessoas.");
    console.log("2 • Adicionar pessoa.");
    console.log("3 • Atualizar pessoa.");
    console.log("4 • Buscar pessoa pelo nome.");
    console.log("5 • Deletar pessoa.");
    console.log("0 • SAIR\n");
  }

  launchMenu(): void {
    let escolha: string;
    console.clear();
    let continuar: boolean = true;
    do {
      this.exibirMenu();
      const opcaoUsuario = prompt("Digite a opção desejada: ")!;
      console.log("\n");
      escolha = opcaoUsuario;

      switch (escolha?.trim()) {
        case "1":
          this.ChamarListarPessoas();
          break;
        case "2":
          this.ChamarAdicionarPessoa();
          break;
        case "3":
          this.ChamarAtualizarPessoa();
        case "4":
          this.ChamarBuscarPessoaPorNome();
          break;
        case "5":
          this.ChamarDeletarPessoa();
          break;
        case "0":
          console.log("Obrigado por utilizar nosso sistema");
          continuar = false;
          break;
        default:
          console.log(
            "Essa opção não existe! Por favor, digite novamente ou digite 0 para sair\n"
          );
          break;
      }
    } while (continuar);
  }

  private ChamarAdicionarPessoa() {
    try {
      let continuarAdicionando: string = "S";
      do {
        let pessoa: Pessoa = new Pessoa(
          prompt("Digite o nome da pessoa: ")!,
          Number(prompt("Digite a idade da pessoa: ")),
          prompt("Digite o email da pessoa: ")!
        );
        this.AdicionarPessoa(pessoa);
        continuarAdicionando = prompt("Deseja Adicionar outra pessoa? (S/N) ")!;
      } while (continuarAdicionando.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(this.getErrorMessage(error), `\n`);
    }
  }

  private ChamarAtualizarPessoa() {
    try {
      let continuarAtualizando: string = "S";
      do {
        this.ChamarListarPessoas();
        console.log("\n");
        this.AtualizarPessoa(
          prompt("Digite o nome da pessoa que deseja atualizar: "),
          Number(prompt("Digite a idade da pessoa: ")),
          prompt("Digite o email da pessoa: ")
        );
        continuarAtualizando = prompt("Deseja Atualizar outra pessoa? (S/N) ")!;
      } while (continuarAtualizando.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(this.getErrorMessage(error), `\n`);
    }
  }

  private ChamarDeletarPessoa() {
    try {
      let continuarExcluindo: string = "S";
      do {
        this.ChamarListarPessoas();
        console.log("\n");
        this.DeletarPessoa(
          prompt("Digite o nome da pessoa que deseja excluir: ")
        );
        continuarExcluindo = prompt("Deseja excluir outra pessoa? (S/N) ")!;
      } while (continuarExcluindo.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(this.getErrorMessage(error), `\n`);
    }
  }

  private ChamarBuscarPessoaPorNome() {
    try {
      let continuarBuscando: string = "S";
      do {
        let pessoa = this.BuscarPorNome(
          prompt("Digite o nome da pessoa: ")
        );

        console.log(pessoa);

        continuarBuscando = prompt("Deseja Buscar outra pessoa? (S/N) ")!;
      } while (continuarBuscando.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(this.getErrorMessage(error), `\n`);
    }
  }

  private ChamarListarPessoas() {
    this.ListarPessoas();
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return `\nERRO - ${error.message}\n`
    return String(error)
  }
}
