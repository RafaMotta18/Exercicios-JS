/* Fazer um algoritmo que pergunte1 número e apresente:
a)O próprio número
b)O quadrado deste número
c)A raiz quadrada deste número
 */

/* sem intereação */

const num = (num1) => {

    console.log(num1)
    console.log(Math.pow(num1, 2))
    console.log(Math.sqrt(num1))
}

num(16)

/* com interação 

let num = prompt("Digite um número")


console.log(num)
console.log(Math.pow(num, 2))
console.log(Math.sqrt(num)) */