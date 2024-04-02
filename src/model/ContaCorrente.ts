import { Conta } from "./Conta";
import { colors } from "../util/Colors";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;

    }


    public get limite(): number {
        return this._limite;
    }

    public set limite(value: number) {
        this._limite = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta corrente: ${this._limite}`);

    }

    public sacar(valor: number): boolean {

        if ((this.saldo + this._limite) >= valor) {
            this.saldo = this.saldo - valor;
            console.log(colors.fg.greenstrong, `Saque de R$${(valor).toFixed(2)} realizado com sucesso!`, colors.reset);
            return true;
        }

        console.log(colors.fg.redstrong, "Saldo insuficiente para realizar transação!", colors.reset);
        return false;

    }

}