const listaDeConvidados = ["Mateus", "Isa", "Amanda", "Paula"];

// Push / Pop / Shift / Unshift / Include

// adicionando umm elemento no final do array
listaDeConvidados.push("Leonardo");

// removendo o último elemento do array
listaDeConvidados.pop();

// adicionando como primeiro item do array (posição 0)
listaDeConvidados.unshift("Kim");

// removendo o primeiro item do array
listaDeConvidados.shift();
console.log(listaDeConvidados);

// verificando se um item está incluído na lista
console.log("Amanda está na lista", listaDeConvidados.includes("Amanda"));