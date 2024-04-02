import readline = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    // const conta: Conta = new Conta(1, 123, 1, "Milena", 10000);
    // conta.visualizar();
    // conta.sacar(10500);
    // conta.visualizar();
    // conta.depositar(5000);
    // conta.visualizar();

    // const conta2: Conta = new Conta(1, 852, 1, "Rebeca", 510200);
    // conta2.visualizar();
    // conta2.sacar(2500);
    // conta2.visualizar();
    // conta2.depositar(800);
    // conta2.visualizar();

    const cc1: ContaCorrente = new ContaCorrente(2, 489, 1, "Isis", 60000, 1000);
    cc1.visualizar();
    cc1.sacar(700000);
    cc1.visualizar();
    cc1.depositar(50);
    cc1.visualizar();

    const cp1: ContaPoupanca = new ContaPoupanca(1, 555, 2, "Katia", 55000, 24);
    cp1.visualizar();
    cp1.sacar(150.50);
    cp1.visualizar();
    cp1.depositar(400);
    cp1.visualizar();

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
    console.log("    Projeto Desenvolvido por: Milena Semanaka.    ");
    console.log("__________________________________________________");
}

main()