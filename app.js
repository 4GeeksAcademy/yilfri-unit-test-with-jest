// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

// EUR to USD
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// USD to JPY
const fromDollarToYen = function(valueInDollar) {
    let valueInEur = valueInDollar / 1.07;
    let valueInYen = valueInEur * 156.5;
    return valueInYen;
}

// JPY to GBP
const fromYenToPound = function(valueInYen) {
    let valueInEur = valueInYen / 156.5;
    let valueInPound = valueInEur * 0.87;
    return valueInPound;
}


// Exporta la función para usarla en otros archivos 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };