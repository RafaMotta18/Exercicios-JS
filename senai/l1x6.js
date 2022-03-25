/* Fazer  um  programa  que  pergunte  uma  temperatura  ao  usuário, em  graus  Fahrenheit, 
e  apresente  esta temperatura convertida em graus Celsius.A fórmula da conversão 
é = (f –32) x 5 : 9, onde c é a temperatura em graus Celsius e fem Fahrenheit. */

/* sem interação */

const temperature = (graus) => {

    const converter = (graus - 32) * 5 / 9


    console.log(converter.toFixed(2))
}

temperature(20)

/* com interação */

let temperature = prompt("Digite a temperatura em Fahrenheit")

const converter = (temperature - 32) * 5 / 9


console.log(converter.toFixed(2))
