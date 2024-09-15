// tipos primitivos

//bolean
var VouF = true;
console.log(typeof(VouF));

//number
var num = 10;
console.log(typeof(num));

//string
var nome = "Matheus";
console.log(typeof(nome));

// Como declarar variaveis (var é usada em escopo global e local, let é usada apenas em escopo local)
var variavel = 'matheus';
variavel = 'muniz';
console.log(typeof(variavel));

let variavel2 = 'matheus';
variavel2 = 'muniz';
console.log(typeof(variavel2));

const variavel3 = 'matheus';
variavel3 = 'muniz';
console.log(typeof(variavel3));

// Escopos
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    var escopoLocalInterno = 'local';
}
console.log(escopoLocalInterno);
escopoLocal();

// atribuição
var atribuicao = 'matheus';
console.log(atribuicao);

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

// comparação identica
var comparacaoIdentica = '0' === 0;
comsole.log(comparacaoIdentica);

/*
* Operadores aritmeticos
*/

// adição
var adicao = 1 + 1;
console.log(adicao);

// subtração
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicação
var multiplicacao = 2 * 2;
console.log(multiplicacao);

// divisão
var divisao = 4 / 2;
console.log(divisao);

// resto da divisão
var resto = 5 % 2;
console.log(resto);

// Potenciação
var potenciacao = 2 ** 2;
console.log(potenciacao);

// incremento
var incremento = 1;
incremento++;
console.log(incremento);

// decremento
var decremento = 1;
decremento--;
console.log(decremento);

/* 
* Operadores relacionais
*/

// maior que
var maiorQue = 1 > 0;
console.log(maiorQue);

// menor que
var menorQue = 1 < 0;

// maior ou igual que
var maiorOuIgualQue = 1 >= 0;

// menor ou igual que
var menorOuIgualQue = 1 <= 0;

/* 
* Operadores logicos
*/

// and
var and = true && true;
console.log(and);

// or
var or = true || false;
console.log(or);

// not
var not = !true;
console.log(not);