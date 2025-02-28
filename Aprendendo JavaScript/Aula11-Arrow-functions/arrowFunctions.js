const valor1 = 1;
const valor2 = 3;

// const calcularSoma = function(valor1, valor2) {
//     return valor1 + valor2;
// }

const calcularSoma = (valor1, valor2) => valor1 + valor2;


console.log(`A soma entre ${valor1} e ${valor2} é: ${calcularSoma(valor1, valor2)}`);

const imprimir = impressao => console.log(impressao);
imprimir("Olá, mundo");