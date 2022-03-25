/* [x] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem. */


const sortedNumber = (Math.floor(Math.random() * 10))
console.log("O número sorteado foi " + sortedNumber)

const LuckyNumber = 6
console.log("Seu Número é " + LuckyNumber)

if (LuckyNumber == sortedNumber) {
    console.log("Parabéns, você Ganhou")
} else {
    console.log("Seu número não corresponde ao número sorteado")
}
