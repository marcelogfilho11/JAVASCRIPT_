function encontrarMaior(numeros) {
    let maior = numeros [0];

    for (let i = 1; i <numeros.length; i++) {
        if(numeros[i] > maior) {
            maior = numeros[1];
        }
    }
    return maior
}
lista = [12312,12544325435,12456756,12424543];
console.log(encontrarMaior(lista))