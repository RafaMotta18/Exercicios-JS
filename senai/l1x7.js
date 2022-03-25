/* Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre estes 3 números. */


/* sem intereação*/


const media = (num, num2, num3) => {

    const sum = num + num2 + num3
    const div = sum / 3

    console.log(div)
}

media(2, 3, 4)

/* com interação */

let num = prompt("Digite um numero");

let num2 = prompt("Digite um numero");

let num3 = prompt("Digite um numero");

const sum = parseInt(num) + parseInt(num2) + parseInt(num3)
const div = sum / 3

console.log(div)


