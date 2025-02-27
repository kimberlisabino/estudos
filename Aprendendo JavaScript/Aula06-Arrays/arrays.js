const listaDeConvidados = ["Mateus", "Isa", "Amanda", "Paula"]; // length é 4
console.log("Kim fez aniversários e convidou: ", listaDeConvidados);

// usando o length para saber a quantidade de valores dentro do array
console.log("Quantos convidados?", listaDeConvidados.length);

// identificando a posição dos valores

// 1. Mateus
// 2. Isa
// 3. Amanda
// 4. Paula

console.log("Convidado número 1: ", listaDeConvidados[0]);
console.log("Convidado número 4: ", listaDeConvidados[listaDeConvidados.length - 1]);

// usando o indexOf
const indiceAmanda = listaDeConvidados.indexOf("Amanda");
console.log("Amanda está em qual índice do nosso array?", indiceAmanda );
console.log("Amanda está em qual número lista?", indiceAmanda + 1);


