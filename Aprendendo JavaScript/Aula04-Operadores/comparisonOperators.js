// operador de compração "maior que"
const idadeKim = 28;
const idadeChris = 30;

console.log("Kim é mais velha que Chris? ", idadeKim > idadeChris);
console.log("Chris é mais velho que Kim? ", idadeChris > idadeKim);

console.log("Kim é mais nova que Chris?", idadeKim < idadeChris);

// operador de "menor ou igual"
console.log("Kim tem idade igual OU menor do que a idade de Chris?" , idadeKim <= idadeChris);

// operador de "maior ou igual"
const maioridade = 18;
console.log("Kim é maior de idade?", idadeKim >= maioridade);

// operadores de igualdade (frouxo e estrito)
const x = 10;
const y = 20;
const z = "10";

console.log("O número " + x + " é igual ao número " + y, x === y);
console.log("O número " + x + " é igual ao número " + z, x == z);

// operador de diferença
console.log("O número " + x + " é diferente do número " + y, x !== y );
console.log("O número " + x + " é diferente do número " + y, x !== z ); // estrito de desigualdade
console.log("O número " + x + " é diferente do número " + y, x != z ); // frouxo de desigualdade