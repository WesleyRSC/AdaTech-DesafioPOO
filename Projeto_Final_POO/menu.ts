import { BancoDeDados } from './bancoDeDados'
import { Pessoa } from './pessoa'

let newBanco = new BancoDeDados ()

function exibirMenu(): void {
    console.log("########### MENU ###########");
    console.log("1 • Listar todas as pessoas.");
    console.log("2 • Adicionar pessoa.");
    console.log("3 • Atualizar pessoa.");
    console.log("4 • Buscar pessoa pelo nome.");
    console.log("5 • Deletar pessoa.");
    console.log("0 • SAIR");
    console.log("############################");
}

function main(): void {
    let escolha: number;

    exibirMenu();

    do {
        const opcaoUsuario = prompt("Digite a opção desejada:")
        escolha = opcaoUsuario ? parseInt(opcaoUsuario) : 10;

        switch (escolha) {
            case 1:
                newBanco.ListarPessoas();
                break;
            case 2:
                newBanco.AdicionarPessoa(new Pessoa("Wesley", 19, "wesleyprofessor@email.com"));
                break;
            case 3:
                newBanco.AtualizarPessoa("Wesley", 20, "wesleymestre@email.com");
                break;
            case 4:
                newBanco.BuscarPorNome("Wesley");
                break;
            case 5:
                newBanco.DeletarPessoa("Cleiton");
                break;
            case 0:
                console.log("Obrigado por utilizar nosso sistema")
                break;
            default:
                console.log("Essa opção não existe! Por favor, digite novamente ou digite 0 para sair");
                break;
        }
    } while (escolha < 0 || escolha > 5);
}

main();
