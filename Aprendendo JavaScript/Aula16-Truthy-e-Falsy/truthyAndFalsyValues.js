// Tipos Falsy - 0, "", undefined, null, NaN
// console.log(Boolean(0)); 
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

//Tipos Truthy - qualquer valor que não seja 0
// console.log(Boolean(1));
// console.log(Boolean(-1));
// console.log(Boolean("Olá, mundo"));
// console.log("Obejto", Boolean({valor1: 1, valor2: 2}));
// console.log("Array", Boolean([1,2]));

const nomes = ["Maria", "João", "", "Matheus"];
console.log(nomes);

const nomesFiltrados = nomes.filter((nome) => Boolean(nome));
console.log(nomesFiltrados);

nomes.forEach(nome => {
    if (nome) {
        console.log("É truthy", nome)
    }
});

const x = 10;
const y = null;

// if (x) {
//     console.log("X é uma variável truthy")
// }

// if (y) {
//     console.log("Y é uma variável truthy")
// }