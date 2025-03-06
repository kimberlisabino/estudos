const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// MAP
const distanciasEmKm = distanciaEmMetros.map(distancia => distancia / 1000);
console.log(distanciasEmKm);

// FILTER
// const itensFiltrados = distanciaEmMetros.filter((distancia) => {
//     if(distancia > 2000) return distancia;
// });

const itensFiltrados = distanciaEmMetros.filter(distancia => distancia > 2000);

console.log("Itens filtrados: ", itensFiltrados);

// REDUCE
// Reduzir todos os valores do Array a um valor só
const distanciaTotal = distanciaEmMetros.reduce((acc, distancia) => {
    return acc + distancia
}, 0); // o parâmetro "0" corresponde ao valor inicial do acumulador para a soma dos itens.Sendo 0 é opcional.

console.log("Distância total é: ", distanciaTotal);