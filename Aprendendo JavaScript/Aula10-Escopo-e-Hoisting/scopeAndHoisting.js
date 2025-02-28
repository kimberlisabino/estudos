// Escopo - partes do código

// Escopo Global - variáveis possíveis de ser acessadas em qualquer escopo
// Escopo de Bloco
// Escopo de Função

const x = "variavel global";

// escopo de bloco
if(x) {
    const z = "variavel de bloco" // só pode ser acessado dentro do bloco em que está
    console.log("X é: ", x);
    console.log("Z é:", z)
}

// escopo de função
const funcao = () => console.log("Na Função, Z é: ", z);
funcao();

