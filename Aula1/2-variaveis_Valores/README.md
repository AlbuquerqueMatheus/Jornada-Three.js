# Guia de JavaScript: Tipagem, Variáveis e Operadores

Este guia é uma introdução à tipagem em JavaScript, variáveis e operadores, abordando desde conceitos básicos até as diferenças entre operadores de atribuição e comparação. Vamos direto ao ponto para ajudá-lo a compreender o funcionamento desses conceitos essenciais!

---

## 📜 Como Funciona a Tipagem em JavaScript

JavaScript é uma linguagem **dinamicamente tipada**, o que significa que as variáveis podem assumir diferentes tipos de valor durante a execução do código. Diferente de linguagens com **tipagem estática** (como Java ou C), você não precisa definir o tipo da variável quando ela é criada. O tipo é atribuído automaticamente com base no valor fornecido.

### Exemplo:
```javascript
let idade = 25; // número
idade = "vinte e cinco"; // string
```

No exemplo acima, `idade` começa como um número e depois se torna uma string. Isso é possível porque JavaScript não exige a definição explícita do tipo de dado.

Principais tipos de dados:
- **String**: Cadeia de caracteres (texto). Ex: `"Olá, mundo!"`
- **Number**: Números, inteiros ou decimais. Ex: `42`, `3.14`
- **Boolean**: Valores lógicos `true` ou `false`
- **Undefined**: Uma variável que foi declarada, mas ainda não recebeu um valor
- **Null**: Representa a ausência proposital de valor
- **Object**: Estruturas complexas, como arrays ou objetos

---

## 📌 O que São Variáveis e Como Declarar

Variáveis são **espaços na memória** onde armazenamos dados que podem ser usados e manipulados ao longo do programa.

### Como declarar uma variável:
- **`var`**: Forma tradicional de declarar variáveis, mas tem escopo global ou de função, o que pode causar comportamentos inesperados.
- **`let`**: Introduzido no ES6, permite declarar variáveis com escopo de bloco, sendo a forma mais segura de usar variáveis que podem ser reatribuídas.
- **`const`**: Também introduzido no ES6, serve para declarar variáveis cujo valor não será reatribuído (constantes).

### Exemplo de Declaração:
```javascript
let nome = "Ana";   // variável que pode ser reatribuída
const idade = 30;   // constante que não pode mudar
```

---

## 🔄 Diferença entre Atribuição, Comparação e Comparação Idêntica

### **Atribuição (`=`)**:
Atribui um valor a uma variável.
```javascript
let x = 10; // 'x' agora vale 10
```

### **Comparação (`==`)**:
Compara dois valores, **sem verificar o tipo**. Ou seja, `2 == '2'` retorna `true`, pois ele só verifica o valor.

### **Comparação Idêntica (`===`)**:
Compara tanto o valor quanto o tipo. Ou seja, `2 === '2'` retorna `false`, porque um é número e o outro é string.

### Exemplo:
```javascript
let a = 5;
let b = "5";

console.log(a == b);  // true, pois apenas os valores são comparados
console.log(a === b); // false, pois os tipos são diferentes (number e string)
```

---

## ➗ Operadores Aritméticos, Relacionais e Lógicos

### **Operadores Aritméticos**:
Usados para realizar cálculos matemáticos:
- `+` (adição)
- `-` (subtração)
- `*` (multiplicação)
- `/` (divisão)
- `%` (módulo - resto da divisão)

### Exemplo:
```javascript
let soma = 10 + 5;   // 15
let resto = 10 % 3;  // 1
```

### **Operadores Relacionais**:
Usados para comparar valores e retornam um valor booleano (`true` ou `false`):
- `>` (maior que)
- `<` (menor que)
- `>=` (maior ou igual)
- `<=` (menor ou igual)
- `==` (igual)
- `!=` (diferente)

### Exemplo:
```javascript
console.log(10 > 5); // true
console.log(8 <= 7); // false
```

### **Operadores Lógicos**:
Combinam expressões booleanas:
- `&&` (E) - Retorna `true` se **ambas** as expressões forem verdadeiras
- `||` (OU) - Retorna `true` se **pelo menos uma** das expressões for verdadeira
- `!` (NÃO) - Inverte o valor booleano

### Exemplo:
```javascript
let resultado = (10 > 5) && (8 > 12); // false
let inverso = !(10 < 5);              // true
```

---

Este guia cobre os fundamentos que você precisa para começar a trabalhar com variáveis, operadores e tipagem em JavaScript. Agora, você está pronto para aplicar esses conceitos em seus projetos e se aprofundar na linguagem!

