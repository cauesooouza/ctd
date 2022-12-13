// Função construtora

function Carro(fabricante = '', modelo = '', ano = 0, cor = '') {
    this.fabricante = fabricante.toLowerCase();
    this.modelo = modelo.toLowerCase();
    this.ano = ano;
    this.cor = cor.toLowerCase();
}

const lojaDeCarros =
{
    carros: [],
    adicionaCarro(fabricante, modelo, ano, cor) {
        const novoCarro = new Carro(fabricante, modelo, ano, cor);
        this.carros.push(novoCarro);
    },
    buscaCarro(e){
        for(let carro of this.carros){
            if( carro.modelo.includes(e.toLowerCase())) {
                return carro;
            }
        }
    }
};

lojaDeCarros.adicionaCarro('Nissan', 'r-35', 2009, 'Preto');

console.log(lojaDeCarros.buscaCarro('R-35'));

// função construtora com class

class Pessoa{
    constructor(nome='',idade = 0, altura = 0, peso = 0){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;   
        this.peso = peso;
    }

    get imc(){
        return this.calculaImc();
    }

    calculaImc(){
        return (this.peso / (this.altura ** 2)).toFixed(2)
    }
}

const caue = new Pessoa('Caue', 26, 1.77, 88);

console.log(caue, caue.imc);