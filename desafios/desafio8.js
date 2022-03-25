/* [X] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
 */

const number = 7

if (number % 2 === 0) {

    if (number % 5 === 0) { console.log("É par e divisível por 5") }
    else { console.log("É par, porém não é divisível por 5") }
} else {

    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log("É ímpar, mas não é primo")
            break
        } else {
            if (i === number - 1) console.log("É impar e primo")
        }

}



const number = (num) => {

    if (num % 5 === 0) {
        console.log("É   divisível por 5")
    } else {
        console.log("É par, porém não é divisível por 5")
    }
}


number(25)