// desafio troca de valores

let a = 7;
let b = 94;

let temp = a; // o a aqui ainda vai estar valendo 7 por isso é um valor temporário
a = b;
b = temp;


// outra forma que eu poderia estar fazendo é com esse método JS
// [a, b] = [b,a];
// depois da troca... a = 94 e b = 7
console.log(a);
console.log(b);