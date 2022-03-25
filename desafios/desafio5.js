/* [X] Crie 5 objetos nesse formato
{ nome: "" idade: "" sexo: "" profissão: "" nacionalidade: "" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser maior de idade e brasileira para ser aprovada. */

const people1 =
{
    name: "Rafael",
    age: 15,
    genre: "Masculino",
    profession: "Estudante",
    nacionality: "Brasileira",
}
const people2 = {
    name: "thiago",
    age: 19,
    genre: "Masculino",
    profession: "Estudante",
    nacionality: "americano",
}
const people3 = {
    name: "Ana",
    age: 19,
    genre: "feminino",
    profession: "confeiteira",
    nacionality: "Brasileira",
}
const people4 = {
    name: "julia",
    age: 15,
    genre: "feminino",
    profession: "advogada",
    nacionality: "Espanhola",
}
const people5 = {
    name: "Pedro",
    age: 20,
    genre: "Masculino",
    profession: "Medico",
    nacionality: "Brasileira",
}


if (people1.age >= 18 && (people1.nacionality === "Brasileiro" || people1.nacionality === "Brasileira")) {
    console.log("Você passou!")
} else {
    console.log("Você não passou!")
}

if (people2.age >= 18 && (people1.nacionality === "Brasileiro" || people1.nacionality === "Brasileira")) {
    console.log("Você passou!")
} else {
    console.log("Você não passou!")
}

if (people1.age >= 18 && (people1.nacionality === "Brasileiro" || people1.nacionality === "Brasileira")) {
    console.log("Você passou!")
} else {
    console.log("Você não passou!")
}

if (people2.age >= 18 && (people1.nacionality === "Brasileiro" || people1.nacionality === "Brasileira")) {
    console.log("Você passou!")
} else {
    console.log("Você não passou!")
}

if (people4.age >= 18 && (people1.nacionality === "Brasileiro" || people1.nacionality === "Brasileira")) {
    console.log("Você passou!")
} else {
    console.log("Você não passou!")
}

if (people5.age >= 18 && (people1.nacionality === "Brasileiro" || people1.nacionality === "Brasileira")) {
    console.log("Você passou!")
} else {
    console.log("Você não passou!")
}