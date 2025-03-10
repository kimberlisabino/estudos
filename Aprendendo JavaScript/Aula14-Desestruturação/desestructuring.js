// DESESTRUTURAÇÃO DE ARRAYS

// const nomes = ["Maria", "Beatriz", "Matheus"];

// const [nome1, nome2, nome3] = nomes;

// console.log("Nome 1", nome1);
// console.log("Nome 2", nome2);
// console.log("Nome 3", nome3);

// const casais = [["Maria", "Décio"], ["Matheus", "Beatriz"]];

// const [casal1, casal2] = casais;

// console.log("Casal 1", casal1);
// console.log("Casal 2", casal2);

// const [[nome1, nome2], [nome3, nome4]] = casais;
// console.log("Nome 1", nome1);
// console.log("Nome 2", nome2);
// console.log("Nome 3", nome3);
// console.log("Nome 4", nome4);

// DESESTRUTURAÇÃO DE OBJETOS

// const pessoa = {
//     nome: "Maria",
//     sobrenome: "Elena",
//     familia: ["Décio", "Beatriz", "Matheus"]
// }

// const {nome: primeiroNome, sobrenome: segundoNome, familia: membrosFamilia} = pessoa;
// console.log(primeiroNome, segundoNome, membrosFamilia);

const pessoa = {
    nomeCompleto: {
        nome: "Maria",
        sobrenome: "Elena",
},
    familia: ["Décio", "Beatriz", "Matheus"]
}

const {nomeCompleto: {nome: primeiroNome, sobrenome: segundoNome}, familia} = pessoa;
