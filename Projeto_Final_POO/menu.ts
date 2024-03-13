import { BancoDeDados } from "./bancoDeDados";
import { Pessoa } from "./pessoa";
import promptSync from "prompt-sync";
const prompt = promptSync();

export class Menu {
  private DataBase = new BancoDeDados();

  exibirMenu(): void {
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

      switch (escolha.trim()) {
        case "1":
          this.ListarPessoas();
          break;
        case "2":
          this.AdicionarPessoa();
          break;
        case "3":
          this.AtualizarPessoa();
        case "4":
          this.BuscarPessoaPorNome();
          break;
        case "5":
          this.DeletarPessoa();
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

  private AdicionarPessoa() {
    try {
      let continuarAdicionando: string = "S";
      do {
        let pessoa: Pessoa = new Pessoa(
          prompt("Digite o nome da pessoa: ")!,
          Number(prompt("Digite a idade da pessoa: ")),
          prompt("Digite o email da pessoa: ")!
        );
        this.DataBase.AdicionarPessoa(pessoa);
        continuarAdicionando = prompt("Deseja Adicionar outra pessoa? (S/N) ")!;
      } while (continuarAdicionando.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(error, `\n`);
    }
  }

  private AtualizarPessoa() {
    try {
      let continuarAtualizando: string = "S";
      do {
        this.ListarPessoas();
        console.log("\n");
        this.DataBase.AtualizarPessoa(
          prompt("Digite o nome da pessoa que deseja atualizar: "),
          Number(prompt("Digite a idade da pessoa: ")),
          prompt("Digite o email da pessoa: ")
        );
        continuarAtualizando = prompt("Deseja Atualizar outra pessoa? (S/N) ")!;
      } while (continuarAtualizando.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(error, `\n`);
    }
  }

  private DeletarPessoa() {
    try {
      let continuarExcluindo: string = "S";
      do {
        this.ListarPessoas();
        console.log("\n");
        this.DataBase.DeletarPessoa(
          prompt("Digite o nome da pessoa que deseja excluir: ")
        );
        continuarExcluindo = prompt("Deseja excluir outra pessoa? (S/N) ")!;
      } while (continuarExcluindo.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(error, `\n`);
    }
  }

  private BuscarPessoaPorNome() {
    try {
      let continuarBuscando: string = "S";
      do {
        let pessoa = this.DataBase.BuscarPorNome(
          prompt("Digite o nome da pessoa: ")
        );

        console.log(pessoa);

        continuarBuscando = prompt("Deseja Buscar outra pessoa? (S/N) ")!;
      } while (continuarBuscando.toUpperCase().trim() == "S");

      console.clear();
    } catch (error) {
      console.log(error, `\n`);
    }
  }

  private ListarPessoas() {
    this.DataBase.ListarPessoas();
  }
}
