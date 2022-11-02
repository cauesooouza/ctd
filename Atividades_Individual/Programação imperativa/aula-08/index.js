/* Exercício “Pode Subir”
    Objetivo
Vamos determinar em que momento usar uma estrutura condicional.
    Microdesafios
Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.
Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
Em caso de impedimento, exiba a mensagem: “Acesso negado.”
*/

function podeSubir(altura,acompanhada) {
    let asking = 'Pode subir?';
    let check_is_alone = acompanhada == 'sim' ||  acompanhada == 's' ? 'está acompanhada': 'não esta acompanhada';
    let default_msg = [
        'Acesso negado.', 'Acesso autorizado somente com acompanhante', 'Acesso autorizado'
    ]
    switch (true) {
        case altura < 120:
            console.log(`${asking} ${default_msg[0]}`);
            break;
        case altura >= 120 && altura <= 140:
            console.log(`${asking} ${default_msg[1]}, e a pessoa ${check_is_alone}`);
            break;
        case altura > 140:
            console.log(`${asking} ${default_msg[2]}`)
            break;
        default:
            console.log('Não entendi sua resposta, por favor responda sua altura em centimentros, e diga se está acompanhada');
            break;
    }
}

podeSubir(130,'sim')