const fichaDaKim = {
    nome: "Kimberli",
    idade: 28,
    profissao: "programadora",
    temFilhos: false,
};

console.log(fichaDaKim);

//concatenação + acessar uma propriedade do objeto
console.log("Nome: " + fichaDaKim.nome);

//inserindo novas propriedades
fichaDaKim.carro = "Polo";

console.log("Ficha da Kim: ", fichaDaKim);

//removendo propriedades
delete fichaDaKim.carro;

console.log("Ficha da Kim: ", fichaDaKim);

console.log("Carro: " + fichaDaKim.carro);

//declarando variáveis e adicionando ao objeto
const nome = "Kimberli";
const idade = 28;
const profissao = "programadora";
const temFilhos = false;

const fichadaKim = {
    nome,
    idade,
    profissao,
    temFilhos,
};