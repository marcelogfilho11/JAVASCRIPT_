const frutas = ["Maça", "Banana", "Abacaxi", "Morango", "Kiwi"];

frutas.push("Melancia");
frutas.shift();

for (const fruta in frutas) {
    console.log(fruta);
}