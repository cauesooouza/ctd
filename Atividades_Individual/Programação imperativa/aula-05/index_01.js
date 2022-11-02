let [nome, sobrenome, idade, peso, altura, plano] =
    ['José', 'da Silva', 27, 83.5, 1.70, true];

let imc = (peso / altura ** 2);

let msg = `${nome} ${sobrenome} tem ${idade} anos e seu indice de massa corporal é de ${imc.toFixed(2)}`;

console.log(msg);