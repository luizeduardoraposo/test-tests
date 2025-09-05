// 50 Funções para desafios comuns em JavaScript
const results = [];

// 1. Soma de dois números
function sum(a, b) { return a + b; }
results.push(sum(2, 3));

// 2. Verifica se número é par
function isEven(n) { return n % 2 === 0; }
results.push(isEven(4));

// 3. Fatorial
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }
results.push(factorial(5));

