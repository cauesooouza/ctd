function calculaImc(nome,sobrenome,idade,peso,altura,plano) {
    const imc = (peso/altura**2).toFixed(2);
    return `${nome} ${sobrenome} tem ${idade} anos e seu indice de massa corporal é de ${imc}`;
}

console.log(calculaImc('José', 'da Silva', 27, 83.5, 1.70, true));