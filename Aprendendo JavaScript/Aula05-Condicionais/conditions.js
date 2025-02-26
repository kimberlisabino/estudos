const idadaMaria = 16;
const marioridade = 18;

if (idadaMaria >= marioridade) {
    console.log("Maria pode dirigir");
} else {
    const anosFaltantes = marioridade - idadaMaria;
    console.log("Maria não pode dirigir");
    console.log(`Faltam ${anosFaltantes} anos para Maria poder dirigir`);
}

// operadores ternários
idadaMaria >= marioridade 
? console.log("Maria pode dirigir") 
: console.log("Maria não pode dirigir");

// validação com várias condições
const idade = 61;

// 0 a 12 anos -> infância
// 13 a 17 anos -> adolescência
// 18 a 25 anos -> jovem adulto
// 26 a 60 anos -> adulto
// mais do que 60 anos -> idoso

if (idade >= 0 && idade <= 12) {
    console.log("Infância");
} else if (idade >= 13 && idade <= 17) {
    console.log("Adolescência");
} else if (idade >= 18 && idade <= 25) {
    console.log("Jovem Adulto");
} else if (idade >= 26 && idade <= 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// ifs independentes quando mais de uma condição for verdadeira
const x = 20;

if (x % 2 === 0) {
    console.log(`O número ${x} é par`);
} 

if (x % 5 === 0) {
    console.log(`O número ${x} é múltiplo de 5`);
}

// estrutura de switch case
const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
    case 0:
        nomeDoDia = "Domingo";
    break;
    case 1:
        nomeDoDia = "Segunda-feira";
    break;
    case 2:
        nomeDoDia = "Terça-feira";
    break;
    case 3:
        nomeDoDia = "Quarta-feira";
    break; // para que ele não continue entrando em todos os casos
    case 4:
        nomeDoDia = "Quinta-feira";
    break;
    case 5:
        nomeDoDia = "Sexta-feira";
    break;
    case 6:
        nomeDoDia = "Sábado";
    break;
}

console.log("Dia da semana: " + nomeDoDia);
