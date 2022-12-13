// Descrição do problema

// É necessário determinar o vencedor de um concurso de stand up composto por 3 apresentações por participante.
// O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e desce. 
// Após a apresentação, o público vota indicando quem eles acham que ganhou aquela rodada. 
// Após isso, continua o próximo lote assim como o primeiro. E finalmente um terceiro.
// Se você quisesse seguir esta final, como você representaria esse problema em uma tabela semelhante a uma planilha? 

// Então vá para o código enquanto pensa em como comparar cada etapa. 
 
// const alicia = [23, 69, 32];
//  const bob = [12, 67, 43];
 

// A tarefa é enfrentar esses votos comparando a[0] com b[0], a[1] com b[1] e a[2] com b[2].


// 	Se a[i] > b[i], então Alice recebe 1 ponto.
// 	Se a[i] < b[i], então Bob recebe 1 ponto.
// 	Se a[i] = b[i], nenhuma pessoa recebe um ponto.

// Os pontos de comparação são os pontos totais que uma pessoa ganhou. Não os votos, mas os pontos ganhos em cada etapa.

// exemplo:
// const alicia = [23, 69, 32];
// const bob = [12, 67, 43];

// puntosAlicia = 1
// puntosBob = 1


// Para os itens do índice 0, Alice recebe um ponto porque a[0] > b[0].
// Para a próxima fase, a[1] e B[1] são iguais, não são obtidos pontos.
// Finalmente, para elementos do índice 2 (terceira etapa), a[2] < b[2] para que Bob receba um ponto.

 
const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function determinaVencedor(participante1, participante2) {
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < participante1.length; i++) {
        if (participante1[i] > participante2[i]) {
            p1++;
        } else {
            p2++;
        }
    }
    return `Participante 1: ${p1}  Participante 2: ${p2}`;
}

console.log("O ganador é: " + determinaVencedor(alicia, bob));

function digitalHouse(n1, n2) {
    let count = 0;
    let s1 = "Digital";
    let s2 = "House";
    while (count <= 100) {
        if ((count % n1) == 0 && (count % n2) == 0) {
            console.log(s1, s2);
        } else if (count % n1 == 0) {
            console.log(s1);
        } else if (count % n2 == 0) {
            console.log(s2);
        } else {
            console.log(count);
        }
        count++;
    }
}

digitalHouse(2, 3);

function somaArray(elemento) {
    let total = '';
    for (let i = 0; i < elemento.length; i++) {
        if (typeof elemento[i] == Number) {
            Number(total)
        } else if (typeof elemento[i] == String) {
            String(total)
        }
        total += elemento[i];

    }
    return total;
}

console.log(
    somaArray([1,2,3,5])
);