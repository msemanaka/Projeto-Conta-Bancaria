import readline = require("readline-sync");

let opcao: number, continuar_loop: boolean = true;

while (continuar_loop) {

    console.log("\n******************************************************");
    console.log("*                                                    *");
    console.log("*                  BANCO DA MILENA                   *");
    console.log("*                                                    *");
    console.log("******************************************************");
    console.log("*                                                    *");
    console.log("*         1. Criar Conta                             *");
    console.log("*         2. Listar todas as Contas                  *");
    console.log("*         3. Buscar Conta por Numero                 *");
    console.log("*         4. Atualizar Dados da Conta                *");
    console.log("*         5. Apagar conta                            *");
    console.log("*         6. Sacar                                   *");
    console.log("*         7. Depositar                               *");
    console.log("*         8. Transferir valores entre Contas         *");
    console.log("*         9. Sair                                    *");
    console.log("*                                                    *");
    console.log("******************************************************");
    console.log("                                                      ");

    opcao = readline.questionInt("Digite o numero da opcao desejada: ");

    switch (opcao) {

        case 1:
            console.log("Voce escolheu: Criar conta");
            break;

        case 2:
            console.log("Voce escolheu: Listar todas as Contas");
            break;

        case 3:
            console.log("Voce escolheu: Buscar Conta por Numero");
            break;

        case 4:
            console.log("Voce escolheu: Atualizar Dados da Conta");
            break;

        case 5:
            console.log("Voce escolheu: Apagar conta ");
            break;

        case 6:
            console.log("Voce escolheu: Sacar ");
            break;

        case 7:
            console.log("Voce escolheu: Depositar");
            break;

        case 8:
            console.log("Voce escolheu: Transferir valores entre Contas");
            break;

        case 9:
            continuar_loop = false;
            break;

        default:
            console.log("Opção inválida!")

    }
}

console.log("Volte sempre!")