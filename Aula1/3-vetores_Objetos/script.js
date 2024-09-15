// O que são vetores ou arrays

// Como declarar vetores
let array = ['string', 1, true];
console.log(array);

// Arrays podem guardar varios tipos de dados e ser acessado por indices
let array2 = ['string', 1, true, [1, 2, 3]];
console.log(array2[3]);

// manipular arrays

// forEach(executa uma função para cada item do array)
array.forEach(function(item, index) {
    console.log(item, index);
});

// push(adiciona um novo item no final do array)
array.push('novo item');
console.log(array);

// pop(retira o ultimo item)
array.pop();
console.log(array);

// shift(retira o primeiro item)
array.shift();
console.log(array);

// unshift(adiciona um novo item no comeco do array)
array.unshift('novo item');
console.log(array);

// splice(remove ou substitui item pelo indice)
array.splice(2, 1);
console.log(array);

// slice(cria um novo array a partir do indice)
let novoArray = array.slice(0, 2);
console.log(novoArray);

// Manipular objetos

let object = { nome: 'Matheus', profissao: 'Programador', Boolean: true, array3: [1, 2, 3] };
console.log(object.array3);

var string = object.nome;
console.log(string);

var { nome, profissao, Boolean } = object;
console.log(nome, profissao, Boolean);