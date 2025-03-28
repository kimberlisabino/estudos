// Selecionando um elemento pelo seu ID
const selectCostumTitle = document.getElementById("customTitle");
console.log("Título selecionado:", selectCostumTitle);

// Selecionando elementos pela tag HTML
const selectButtons = document.getElementsByTagName("button");
console.log("Botões da página:", selectButtons);

// Selecionando elementos de uma mesma classe
const selectStyledButtons = document.getElementsByClassName("styledButton");
console.log("Botões estilizados:", selectStyledButtons);

// Selecionando qualquer seletor, independetemente de class, id e tag
// Traz o primeiro que se enquadre na condição
const boldTexts = document.querySelector(".boldText");
console.log("Bold texts", boldTexts);

// Traz todos que se enquadram na condição
// Junção do getElements + querySelector
const allBoldTexts = document.querySelectorAll(".boldText");
console.log("All bold texts", allBoldTexts);