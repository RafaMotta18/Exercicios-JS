/* Fazer um programa que pergunte um valor em Dólares e apresente o equivalente em Reais.
Considere U$1, 00 = R$1, 72. */

/* sem alteração */

const dollar = (Dollar) => {
    console.log(1.72 * Dollar)
}

dollar(2)


/* com interação */


let dollar = prompt("Digite um valor em dolares");

console.log(1.72 * dollar);


