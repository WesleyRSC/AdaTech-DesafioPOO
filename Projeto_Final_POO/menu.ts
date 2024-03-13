import { BancoDeDados } from "./bancoDeDados";
import { Pessoa } from "./pessoa";
import * as readline from 'readline';

class Menu {
  private bancoDeDados: BancoDeDados;
  private readlineInterface: readline.Interface;

  constructor() {
    this.bancoDeDados = new BancoDeDados();
    this.readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  public exibirMenu() {
    console.log("----- MENU -----");
    console.log("1. Adicionar Pessoa");
    console.log("2. Listar Pessoas");
    console.log("3. Buscar Pessoa pelo Nome");
    console.log("4. Atualizar Pessoa");
    console.log("5. Deletar Pessoa");
    console.log("6. Sair");

    this.readlineInterface.question("Escolha uma opção: ", (opcao) => {
      this.processarOpcao(opcao);
    });
  }

  private processarOpcao(opcao: string) {
    switch (opcao) {
      case "1":
        this.adicionarPessoa();
        break;
      case "2":
        this.listarPessoas();
        break;
      case "3":
        this.buscarPorNome();
        break;
      case "4":
        this.atualizarPessoa();
        break;
      case "5":
        this.deletarPessoa();
        break;
      case "6":
        console.log("Saindo...");
        this.readlineInterface.close();
        break;
      default:
        console.log("Opção inválida.");
        this.exibirMenu();
        break;
    }
  }

  private adicionarPessoa() {
    this.readlineInterface.question("Nome: ", (nome) => {
      this.readlineInterface.question("Idade: ", (idadeInput) => {
        const idade = parseInt(idadeInput);
        this.readlineInterface.question("Email: ", (email) => {
          try {
            const novaPessoa = new Pessoa(nome, idade, email);
            this.bancoDeDados.AdicionarPessoa(novaPessoa);
            console.log("Pessoa adicionada com sucesso!");
            this.exibirMenu();
          } catch (error) {
            console.log(error.message);
            this.exibirMenu();
          }
        });
      });
    });
  }


  private listarPessoas() {
    this.bancoDeDados.ListarPessoas();
    this.exibirMenu();
  }

  private buscarPorNome() {
    this.readlineInterface.question("Nome da pessoa a ser buscada: ", (nome) => {
      try {
        const pessoaEncontrada = this.bancoDeDados.BuscarPorNome(nome);
        console.log("Pessoa encontrada:");
        console.log(pessoaEncontrada);
      } catch (error) {
        console.log(error.message);
      }
      this.exibirMenu();
    });
  }

  private atualizarPessoa() {
    this.readlineInterface.question("Nome da pessoa a ser atualizada: ", (nome) => {
      this.readlineInterface.question("Nova idade (pressione Enter para manter a mesma idade): ", (idadeInput) => {
        const idade = idadeInput !== "" ? parseInt(idadeInput) : undefined;
        this.readlineInterface.question("Novo email (pressione Enter para manter o mesmo email): ", (email) => {
          try {
            this.bancoDeDados.AtualizarPessoa(nome, idade, email || undefined);
            console.log("Pessoa atualizada com sucesso!");
          } catch (error) {
            console.log(error.message);
          }
          this.exibirMenu();
        });
      });
    });
  }

  private deletarPessoa() {
    this.readlineInterface.question("Nome da pessoa a ser deletada: ", (nome) => {
      try {
        this.bancoDeDados.DeletarPessoa(nome);
      } catch (error) {
        console.log(error.message);
      }
      this.exibirMenu();
    });
  }
}

// Executar o menu
const menu = new Menu();
menu.exibirMenu();
