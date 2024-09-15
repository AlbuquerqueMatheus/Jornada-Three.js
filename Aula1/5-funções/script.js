// declarando funções
function saudacao () {
    console.log('Hello World');
}
saudacao();

// funções com parametros
function mensagem ( primeiro, segundo ) {
    console.log(primeiro, segundo);
}
mensagem('matheus', 'muniz')

// tipos de funções

// declarativas( tem que ter o nome da função, obrigatoriamente)
function funcao() {
    console.log('sou uma mensagem de uma função declarativa');
}

// expressões de funções(atribuidas a expressões e a nomeação das funções é opcional)

// com nomeção
var funcao = function funcao() {
    console.log('sou uma mensagem de uma função de expressão nomeada');
}
// sem nomeção
var funcao = function() {
    console.log('sou uma mensagem de uma função de expressão não nomeada');
}

// arrow function
var funcao = () => {
    console.log('sou uma mensagem de uma função arrow');
}