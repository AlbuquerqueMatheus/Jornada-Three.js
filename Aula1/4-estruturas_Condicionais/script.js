// Estruturas Condicionais

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores ativos') : console.log('Jogadores inativos');

// if
var jogador1 = 0;
var jogador2 = 1;
var placar;

if (jogador1 != -1) {
    
    if (jogador1 > 0 && jogador2 == 0) {

        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;

    } else if (jogador2 > 0 && jogador1 == 0) {
        
        console.log('Jogador 2 marcou ponto');
        placar = jogador1 < jogador2

    } else {
        
        console.log('Ninguem marcou ponto');
    }
}

// switch
switch (placar) {

    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguem ganhou');
}

// Estrutura de Repetição

// for

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let objetc = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', propriedade4: 'valor4', propriedade5: 'valor5',};

//for(executa uma instrução enquanto a condicao for verdadeira)
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice, array[indice]);
}

// for/in(executa uma instrução para cada chave do objeto)
for (let chave in objetc) {
    console.log(chave, objetc[chave]);
}
for (let valor of array) {
    console.log(valor);
}

// for/of(executa uma instrução para cada item do array)
for (let valor of array) {
    console.log(valor);
}

// while(executa uma instrução enquanto a condicao for verdadeira)
var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

// do/while(executa pelo menos uma vez e depois verifica a condicao)
var b = 0;
do {
    b++;
    console.log(b);
} while (b < 5);