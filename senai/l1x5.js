/* Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15% */

/* sem alteração */

const salary = (number) => {

    const porcent = number * (15 / 100)

    console.log(`O seu sálario é de ${number}, mas com o aumento irá ser de ${number + porcent}`)

}

salary(2000)


/* com interação */

let number = prompt("Digite o valor do seu sálario");

const porcent = number * (15 / 100)
console.log(`O seu sálario é de ${number}, mas com o aumento irá ser de ${parseInt(number) + porcent}`);
