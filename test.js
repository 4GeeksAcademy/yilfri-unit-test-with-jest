// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// EUR to USD
test("One euro should be 1.07 dollars", function() {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

// USD to JPY
test("One dollar be 156.5 Yen", function() {
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5;

    expect(fromDollarToYen(3.5)).toBeCloseTo(511.915, 2);
})

// JPY to GBP
test("One JPY be 0.87 GBP", function() {
    const pound = fromYenToPound(350);
    const expected = (350/156.5) * 0.87;

    expect(fromYenToPound(350)).toBeCloseTo(1.945, 2);
})