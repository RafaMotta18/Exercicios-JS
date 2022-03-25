/* Fazer um programa que pergunte um número inteiro e apresente o seu antecessor e seu sucessor. */

/* sem alteração */

const successor = (num2) => {
    const succe = num2 + 1
    console.log(`O sucesso do ${num2} é ${succe}`)
}

const predecessor = (num) => {
    const prede = num - 1
    console.log(`O antecessor do ${num} é ${prede}  `)
}

predecessor(2)

/* com interação */

let num = prompt("Digite um numero");


console.log(`O sucesso do ${num} é ${parseInt(num) + 1} e o antecessor do ${num} é ${parseInt(num) - 1} `)



