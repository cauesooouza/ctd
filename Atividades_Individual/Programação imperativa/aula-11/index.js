// Concurso.
// Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de um concurso que foi realizado no fim de semana.
// Para isso, precisaremos seguir as seguintes instruções e informações para poder desenvolver nosso aplicativo.  
// Cada participante tem 5 notas, dos quais suas pontuações individuais serão formadas, os participantes com suas respectivas pontuações são:
// Participante A:  5, 8, 4, 9, 5
// Participante B:  8, 7, 8, 6, 8
// Participante C:  7, 5, 10, 8, 3
// O concurso consiste em 2 modalidades de seleção para um vencedor:
// Melhor média (a maior pontuação média entre os concorrentes)
// Maior e-tip(a maior pontuação entre as 5 notas de cada participante)
// Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:
// Determine qual seria a maneira ideal de representar cada participante com suas pontuações.

// Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

// Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.

// Logo nosso líder tecnológico nos pede para criar essas duas funções geramos uma nova funcionalidade 
// chamada competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas 
// anteriormente para calcular as médias e pontuações mais altas de cada uma
// e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.


const PARTICIPANTE_A = [5, 8, 4, 9, 5];
const PARTICIPANTE_B = [8, 7, 8, 6, 8];
const PARTICIPANTE_C = [7, 5, 10, 8, 3];

function pontuacaoMedia(participante) {
    let total = 0;
    let media = 0;
    for (let i = 0; i < participante.length; i++) {
        total += participante[i];
    }
    return media = total / participante.length;
}

// console.log(pontuacaoMedia(PARTICIPANTE_A));

function pontuacaoMaior(participante) {
    let maior = 0;
    for (let i = 0; i < participante.length; i++) {
        if (participante[i] > maior) {
            maior = participante[i]
        }
    }
    return maior;
}

// console.log(pontuacaoMaior(PARTICIPANTE_C));

function competicao(participante1, participante2, participante3) {
    let media1 = pontuacaoMedia(participante1);
    let media2 = pontuacaoMedia(participante2);
    let media3 = pontuacaoMedia(participante3);
    let maiorMedia = 0;
    if (media1 > media2 && media1 > media3) {
        maiorMedia = media1;
        console.log(`A maior media foi do participante 1: ${maiorMedia}`);
    } else if (media2 > media3 && media2 > media1) {
        maiorMedia = media2;
        console.log(`A maior media foi do participante 2: ${maiorMedia}`);
    } else {
        maiorMedia = media3;
        console.log(`A maior media foi do participante 3: ${maiorMedia}`);
    }

    let maiorNota1 = pontuacaoMaior(participante1);
    let maiorNota2 = pontuacaoMaior(participante2);
    let maiorNota3 = pontuacaoMaior(participante3);
    let maiorNota = 0;
    if (maiorNota1 > maiorNota2 && maiorNota1 > maiorNota3) {
        maiorNota = maiorNota1;
        console.log(`A maior nota foi do participante 1: ${maiorNota}`);
    } else if (maiorNota2 > maiorNota3 && maiorNota2 > maiorNota1) {
        maiorNota = maiorNota2;
        console.log(`A maior nota foi do participante 2: ${maiorNota}`);
    } else {
        maiorNota = maiorNota3;
        console.log(`A maior nota foi do participante 3: ${maiorNota}`);
    }
}

competicao(PARTICIPANTE_A, PARTICIPANTE_B, PARTICIPANTE_C);
