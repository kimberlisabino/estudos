// function imprimir (impressao) {
//     console.log(impressao);
// }

// imprimir("olá, mundo");

const imprimir = function (impressao) {
    console.log(impressao);
}

imprimir("Olá, mundo");

// function calcularSoma(valor1, valor2) {
//     return valor1 + valor2;
// }

const valor1 = 1;
const valor2 = 3;
const calcularSoma = function(valor1, valor2) {
    return valor1 + valor2;
}

imprimir(`A soma entre ${valor1} e ${valor2} é: ${calcularSoma(valor1, valor2)}`);
