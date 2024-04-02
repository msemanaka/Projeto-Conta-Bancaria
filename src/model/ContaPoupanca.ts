import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        super(numero, agencia, tipo, titular, saldo);
    }

}