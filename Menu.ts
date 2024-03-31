import readline = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.fg.green, "\n******************************************************");
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
        console.log("                                                      ", colors.reset);

        opcao = readline.questionInt("Digite o numero da opcao desejada: ");

        if (opcao == 9) {
            console.log("\nBanco da Milena - O seu futuro começa aqui!");
            sobre();
        }

        switch (opcao) {

            case 1:
                console.log("\n\nVoce escolheu: Criar conta\n\n");
                break;

            case 2:
                console.log("\n\nVoce escolheu: Listar todas as Contas\n\n");
                break;

            case 3:
                console.log("\n\nVoce escolheu: Buscar Conta por Numero\n\n");
                break;

            case 4:
                console.log("\n\nVoce escolheu: Atualizar Dados da Conta\n\n");
                break;

            case 5:
                console.log("\n\nVoce escolheu: Apagar conta\n\n");
                break;

            case 6:
                console.log("\n\nVoce escolheu: Sacar\n\n");
                break;

            case 7:
                console.log("\n\nVoce escolheu: Depositar\n\n");
                break;

            case 8:
                console.log("\n\nVoce escolheu: Transferir valores entre Contas\n\n");
                break;

            default:
                console.log("Opção inválida!");
                break;

        }
    }

}

export function sobre(): void {
    console.log("\n__________________________________________________");
    console.log("|   Projeto Desenvolvido por: Milena Semanaka    |");
    console.log("__________________________________________________");
}

main()