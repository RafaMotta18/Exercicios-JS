const fruit = (fruit2) => {

    let result
    switch (fruit2) {
        case "apple":
            result = "apple" == fruit2
            console.log("Não vendemos esta fruta aqui")
            break;

        case "watermelon":
            result = "watermelon" == fruit2
            console.log("Aqui está, são 3 reais o quilo")
            break;

        case "kiwi":
            result = "kiwi" === fruit2
            console.log("Estamos com escassez de kiwis")
            break;

        default: result = "erro no console"
            break;
    }
    return result
}
console.log(fruit("kiwi"))
