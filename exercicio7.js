function celsiusParaFahrenheit (celsius) {
    const fahrenheit = (celsius*9) /5 + 32;
    return celsius + "C equivalem a " + fahreinheit.toFixed(1) + "F";
}
console.log(celsiusParaFahrenheit(25));