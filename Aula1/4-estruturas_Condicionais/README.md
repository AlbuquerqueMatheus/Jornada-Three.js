# 📚 Guia de Estruturas Condicionais, Decisão e Repetição em JavaScript

Este guia é uma introdução às principais estruturas de controle de fluxo em JavaScript. Vamos explorar **estruturas condicionais**, **estruturas de decisão** e **estruturas de repetição** para ajudar a criar programas que tomam decisões e executam ações com base em condições específicas.

---

## 🔄 O que São Estruturas Condicionais?

As **estruturas condicionais** permitem que o programa tome decisões com base em condições (expressões que retornam `true` ou `false`). Elas são fundamentais para controlar o fluxo de execução do código, permitindo que blocos específicos sejam executados apenas quando determinadas condições forem satisfeitas.

### Exemplo de Estrutura Condicional:
A estrutura mais comum para executar um bloco de código condicionalmente é o **`if`** e **`else`**.

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```
No exemplo acima, se a variável `idade` for maior ou igual a 18, o código dentro do bloco `if` será executado. Caso contrário, o bloco `else` será executado.

---

## ✅ O que São Estruturas de Decisão?

As **estruturas de decisão** em JavaScript são usadas para escolher entre diferentes caminhos possíveis, com base em condições. Elas permitem que o programa "decida" qual bloco de código executar, dependendo das circunstâncias.

### 1. **`if`, `else if` e `else`**:
Essas estruturas permitem múltiplas verificações de condições em sequência.

```javascript
let nota = 90;

if (nota >= 90) {
  console.log("Aprovado com excelência!");
} else if (nota >= 70) {
  console.log("Aprovado.");
} else if{
  console.log("Reprovado.");
}else{

}
```
Aqui, o código verifica várias condições usando `else if`. Dependendo da nota, diferentes mensagens serão exibidas.

### 2. **`switch`**:
O `switch` é outra estrutura de decisão que é usada quando você tem várias opções possíveis e deseja comparar um valor com vários casos diferentes.

```javascript
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("A cor é vermelha.");
    break;
  case "azul":
    console.log("A cor é azul.");
    break;
  default:
    console.log("Cor não reconhecida.");
}
```
No exemplo, o `switch` verifica a variável `cor` e executa o bloco correspondente. O `default` é executado se nenhum dos casos for atendido.

---

## 🔁 O que São Estruturas de Repetição?

As **estruturas de repetição** permitem executar um bloco de código várias vezes, de acordo com uma condição específica ou até que ela seja satisfeita. Elas são ideais quando você precisa repetir ações sem escrever o mesmo código várias vezes.

### 1. **`for`**:
A estrutura `for` é usada quando você sabe exatamente quantas vezes deseja repetir um bloco de código.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Repetição número " + i);
}
```
Neste exemplo, o loop `for` repetirá o código dentro do bloco 5 vezes (de `i = 0` até `i = 4`).

### 2. **`while`**:
O `while` executa o código enquanto uma condição for verdadeira.

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Contador: " + contador);
  contador++;
}
```
Neste caso, o loop `while` continuará executando enquanto a variável `contador` for menor que 5.

### 3. **`do...while`**:
O `do...while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.

```javascript
let numero = 6;

do {
  console.log("Número: " + numero);
  numero++;
} while (numero < 5);
```
Aqui, o código dentro de `do` será executado **uma vez**, mesmo que a condição `numero < 5` seja falsa.

---

### 🔑 Conclusão

Neste guia, você aprendeu sobre:
- **Estruturas Condicionais** (`if`, `else`) que controlam o fluxo do programa com base em condições.
- **Estruturas de Decisão** (`if...else if`, `switch`) que permitem escolher entre múltiplos caminhos de execução.
- **Estruturas de Repetição** (`for`, `while`, `do...while`) que permitem executar blocos de código repetidamente, tornando o código mais eficiente e limpo.

Esses conceitos são fundamentais para construir lógica de controle e automatizar tarefas em seus programas.