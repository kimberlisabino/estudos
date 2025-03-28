// ALTERANDO O CONTEÚDO DE ELEMENTOS
const buttonsContainer = document.querySelector(".container");

// Método para substituir o conteúdo de dentro do elemento selecionado
// buttonsContainer.innerHTML = "<button>Novo Botão</button>";

// Trocar apenas o conteúdo de texto de um elemento
const firtsTitle = document.querySelector("h1");
firtsTitle.innerText = "Novo título";

// ALTERANDO ESTILOS
buttonsContainer.style.backgroundColor = "blue";

// ALTERANDO ATRIBUTOS DAS TAGS
const lastTitle = document.getElementById("title4");
title4.setAttribute("id", "customTitle");

const thirdTitle = document.querySelector("h2:nth-of-type(3)"); // encontra o terceiro h2 do elemento pai (body)
thirdTitle.setAttribute('id', 'orangeTitle');

lastTitle.removeAttribute('id');

// ADICIONANDO E REMOVENDO ELEMENTOS NA TELA
const newLastTitle = document.createElement('h3');
newLastTitle.innerText = 'Título novo';
document.body.appendChild(newLastTitle);

const newButton = document.createElement('button');
newButton.innerText = 'Botão novo';
buttonsContainer.appendChild(newButton);
newButton.classList.add('styledButton', 'boldText');
// newButton.setAttribute('class', 'styledButton');