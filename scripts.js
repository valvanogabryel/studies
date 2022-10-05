class contaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get saldo() {
        return this._saldo;

    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação Negada'
        } else {
            this._saldo = this._saldo - valor
        }
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
        return this._saldo;
    }
}

class contaCorrente {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this.cartaoCredito = c;
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

class contaCorrente {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'poupança';

    }
}

class contaUniversitaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'poupança';

    }
}

