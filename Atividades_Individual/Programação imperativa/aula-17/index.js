const fs = require('fs');
const { parse } = require('csv-parse');

class Cliente {
    constructor(titular, numero, tipo, saldo) {
        this.titular = titular;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }
}

const BANCO = {
    clientes: [],
    novoCliente(titular, numero, tipo, saldo) {
        const NOVO_CLIENTE = new Cliente(titular, numero, tipo, saldo);
        this.clientes.push(NOVO_CLIENTE);
    },
    mostraClientes() {
        this.clientes.sort((a, b) => {
            return a.titular < b.titular ? -1 : a.titular > b.titular ? 1 : 0;
        })
        console.table(this.clientes);
    },
    consultarCliente(numeroDaConta) {
        console.table(
            this.clientes.find((cliente) => cliente.numero == numeroDaConta || Number(cliente.numero) == Number(numeroDaConta))
        );
    },
    deposito(numeroDaConta, valor) {
        let clienteBeneficiado = this.clientes.find((cliente) => cliente.numero == numeroDaConta || Number(cliente.numero) == Number(numeroDaConta));
        clienteBeneficiado.saldo = Number(clienteBeneficiado.saldo) + valor;
        console.log(
            `Deposito realizado, ${clienteBeneficiado.titular} recebeu ${valor}, e agora seu saldo é ${clienteBeneficiado.saldo}`
        );
    },
    saque(numeroDaConta, valor) {
        let clienteSubtraido = this.clientes.find((cliente) => cliente.numero == numeroDaConta || Number(cliente.numero) == Number(numeroDaConta));
        if (valor < clienteSubtraido.saldo) {
            clienteSubtraido.saldo = Number(clienteSubtraido.saldo) - valor;
            console.log(
                `Saque realizado, ${clienteSubtraido.titular} sacou ${valor}, e agora seu saldo é de ${clienteSubtraido.saldo}`
            );
        } else {
            console.log(
                `Saldo insuficiente`
            );
        }


    }
}

fs.createReadStream("./Atividades_Individual/Programação imperativa/aula-17/data.csv")
    .pipe(parse({ delimiter: ',', from_line: 2 }))
    .on("data", function (cliente) {
        BANCO.novoCliente(cliente[0], cliente[1], cliente[2], cliente[3])
    })
    .on("end", function () {
        // BANCO.mostraClientes();
        // BANCO.consultarCliente(3151956165)
        // BANCO.deposito(3151956165, 9)
        // BANCO.saque(3151956165, 277)
        // BANCO.consultarCliente(3151956165)
    });