function verificarSituacao (nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3)/3

    if (media >=7) {
        return "Media " + media.toFixed(1) + ": Aprovado";
    } else if (media >=5) {
        return "Media " + media.toFixed(1) + ": Recuperação";
    } else {
        return "Media " + media.toFixed(1) + ": Reprovado";
    }
}

console.log(verificarSituacao(8, 7.5, 9));
console.log(verificarSituacao(5, 5, 3));
console.log(verificarSituacao(7, 5.5, 8));