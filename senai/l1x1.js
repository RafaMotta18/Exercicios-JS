/* Desenvolver um programa que pergunte ao  usuário o seu nome completo e seu sexo.Em seguida, o programa deve apresentar os dados anteriormente informados. */

/* sem interação */
const fullName = "Rafael Da Motta Ferreira"
const genre = "masculino"



console.log(` Seu nome é ${fullName} e seu sexo é ${genre}`)

/* com interação */

let name = prompt("Digite seu nome");
let genre = prompt("Digite seu sexo");

console.log(`Seu nome é ${name} e seu sexo é ${genre}`)

