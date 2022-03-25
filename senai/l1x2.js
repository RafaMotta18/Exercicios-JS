/* Elaborar um programa que perguntequatro valores inteiros e apresente 2 resultados:
 a)Resultado de suas adições
 b)Resultado de suas multiplicações */

/* sem alteração */

const sum = (num1, num2, num3, num4) => {
    console.log(num1 + num2 + num3 + num4)
}

const Multiply = (num1, num2, num3, num4) => {
    console.log(num1 * num2 * num3 * num4)
}

sum(2, 3, 4, 5)
Multiply(2, 3, 4, 5)

/* com alteração */

let int1 = prompt("Digite o 1 número");
let int2 = prompt("Digite o 2 número");
let int3 = prompt("Digite o 3 número");
let int4 = prompt("Digite o 4 número");

const sum = parseInt(int1) + parseInt(int2) + parseInt(int3) + parseInt(int4)
const multiply = int1 * int2 * int3 * int4

console.log(`A soma dos números é ${sum}, e a multiplicação deles é ${multiply}`)