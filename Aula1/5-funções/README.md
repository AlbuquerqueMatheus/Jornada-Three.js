# 📚 Guia de Funções em JavaScript

Este guia vai te ajudar a entender o que são **funções** em JavaScript, os diferentes tipos, como declará-las e como usar **parâmetros** para passar valores às funções.

---

## 📌 O que São Funções?

Em JavaScript, uma **função** é um bloco de código projetado para executar uma tarefa específica. Funções permitem reutilizar código, tornando-o mais eficiente e organizado. Você pode pensar em uma função como uma "receita", que só é executada quando é chamada.

### Exemplo Básico:
```javascript
function saudacao() {
  console.log("Olá, mundo!");
}
```
Neste exemplo, criamos uma função chamada `saudacao` que exibe a mensagem "Olá, mundo!" quando é chamada.

### Chamando a Função:
Para executar o código dentro de uma função, você precisa **chamá-la** pelo nome seguido de parênteses:
```javascript
saudacao(); // "Olá, mundo!"
```

---

## 🛠️ Tipos de Funções

Existem diferentes maneiras de declarar funções em JavaScript, cada uma com suas características específicas:

### 1. **Função Declarada (Function Declaration)**:
A forma mais comum e tradicional de declarar uma função.

```javascript
function soma(a, b) {
  return a + b;
}
```
Essa função chamada `soma` aceita dois parâmetros e retorna a soma deles.

### 2. **Função Expressa (Function Expression)**:
Funções também podem ser atribuídas a variáveis. Esse tipo de declaração é chamada de **expressão de função**.

```javascript
const multiplicar = function(a, b) {
  return a * b;
};
```
Aqui, a função é anônima (sem nome) e atribuída à variável `multiplicar`.

### 3. **Arrow Function (Função de Seta)**:
Introduzida no ES6, a **arrow function** oferece uma sintaxe mais curta e é muito útil quando você não precisa de um nome de função.

```javascript
const subtrair = (a, b) => a - b;
```
Essa função realiza a mesma tarefa da função `subtrair`, mas com uma sintaxe mais compacta.

---

## ✍️ Como Declarar Funções

Você pode declarar uma função em JavaScript de forma muito simples. A sintaxe básica é:

```javascript
function nomeDaFuncao() {
  // Código a ser executado
}
```

### Exemplo:
```javascript
function dizerOla() {
  console.log("Olá!");
}
```

A função `dizerOla` pode ser chamada em qualquer parte do código para imprimir `"Olá!"`.

### Funções que Retornam Valores:
Funções podem **retornar** um valor usando a palavra-chave `return`. Isso é útil quando você precisa que a função calcule ou processe dados e forneça um resultado.

```javascript
function quadrado(num) {
  return num * num;
}

console.log(quadrado(4)); // 16
```

---

## 🔄 Funções com Parâmetros

As **funções com parâmetros** permitem que você passe valores específicos para que a função os use internamente. Esses valores são conhecidos como **argumentos** quando você chama a função.

### Declarando Funções com Parâmetros:
```javascript
function cumprimentar(nome) {
  console.log("Olá, " + nome + "!");
}
```

### Chamando a Função com Argumentos:
```javascript
cumprimentar("Maria"); // "Olá, Maria!"
cumprimentar("João");  // "Olá, João!"
```

No exemplo acima, `nome` é o parâmetro da função, e "Maria" e "João" são os argumentos passados quando a função é chamada.

### Funções com Múltiplos Parâmetros:
Você pode declarar uma função com vários parâmetros, separados por vírgulas.

```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 3)); // 8
```

### Parâmetros Opcionais (ou Valores Padrão):
Em JavaScript, você pode definir **valores padrão** para parâmetros. Se nenhum valor for passado ao chamar a função, o parâmetro usará o valor padrão.

```javascript
function saudacao(nome = "Amigo") {
  console.log("Olá, " + nome + "!");
}

saudacao();         // "Olá, Amigo!"
saudacao("Carlos"); // "Olá, Carlos!"
```
Nesse exemplo, se o parâmetro `nome` não for passado, ele assumirá o valor `"Amigo"`.

---

### 🔑 Conclusão

Neste guia, você aprendeu:
- O que são **funções** em JavaScript e como elas ajudam a organizar e reutilizar código.
- Os diferentes **tipos de funções**, incluindo funções declaradas, expressas e arrow functions.
- Como **declarar funções** e usá-las com ou sem retorno.
- Como passar **parâmetros** para funções e definir **valores padrão**.

Esses conceitos são fundamentais para a criação de código modular e eficiente em JavaScript, facilitando o desenvolvimento de aplicações mais complexas e organizadas!