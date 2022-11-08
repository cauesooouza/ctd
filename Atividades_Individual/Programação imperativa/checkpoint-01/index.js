// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function menuMicroondas(comida, tempo) {
    // array de objetos contendo o nosso menu
    const MENU = [
        { "id": 1, "item": "pipoca", "tempo": 10 },
        { "id": 2, "item": "macarrão", "tempo": 8 },
        { "id": 3, "item": "carne", "tempo": 15 },
        { "id": 4, "item": "feijão", "tempo": 12 },
        { "id": 5, "item": "brigadeiro", "tempo": 8 },
    ];
    // variavel que ira checkar se a comida passada pelo usuario sera encontrada no menu
    let checkMenu = MENU.find(e => e.id == comida || e.item == comida.toLowerCase());
    // mensagens padrão para entregar ao usuario
    const MSG = ["Prato inexistente", "Tempo insuficiente", "A comida queimou", "Kabumm", "Prato pronto, bom apetite!!!"];
    // condições a ser checkadas 
    if (checkMenu == undefined) {
        return `${MSG[0]}`
    } else if (checkMenu != undefined && tempo == null){
        return `Defina o tempo de preparo`
    } else {
        if (tempo < checkMenu.tempo) {
            return `${MSG[1]}. ${MSG[4]}`;
        } else if (tempo > 2 * checkMenu.tempo) {
            return `${MSG[2]} ${MSG[4]}`
        } else if (tempo > 3 * checkMenu.tempo) {
            return `${MSG[3]} ${MSG[4]}`;
        } else {
            return `${MSG[4]}`
        }
    } 
}

console.log(menuMicroondas('4', 8));