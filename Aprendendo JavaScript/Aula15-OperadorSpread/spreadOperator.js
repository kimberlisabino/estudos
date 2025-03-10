// Spread operators em arrays

const listaKim = ["Maria", "Beatriz", "Matheus"];

// const listaMaeKim = [...listaKim, "Sergio", "Valdete"]; // copia itens de um array para dentro de outro array

// console.log("listaMaeKim: ", listaMaeKim);

// Criar cópias de arrays
console.log("listaKim", listaKim);

const listaKim2 = [...listaKim];
listaKim2.push("Leonardo");

console.log("listaKim2", listaKim2);

// Spread operators em objetos

const professor1 = {
    materia: "Português",
    escola: "Aprova",
    nome: "Kim",
} 

const professor2 = {
    ...professor1,
    nome: "Isa",
}

console.log("Professor 1", professor1);
console.log("Professor 2", professor2);

