const usuario = [
    {nome: "Issac Newton", idade:37},
    {nome: "Leticia", idade:17},
    {nome: "Richard Rasmussen", idade:47},
];
function filtrarMotoristas(lista) {
    return lista.filter(function (usuario) {
        return usuario.idade >=18;
    });
}

console.log(filtrarMotoristas(usuario))