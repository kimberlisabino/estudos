// PRINCIPAIS EVENTOS DE MOUSE

const button = document.querySelector('button');

const onMouseClick = () => {
    button.innerText = 'Clicou';
}

const onMouseEnter = () => {
    button.innerText = 'Mouse entrou';
}

const onMouseLeave = () => {
    button.innerText = 'Mouse saiu';
}

// Refatorando evento de mouse
button.addEventListener('click', onMouseClick);
button.addEventListener('mouseenter', onMouseEnter);
button.addEventListener('mouseleave', onMouseLeave);

// PRINCIPAIS EVENTOS DE TECLADO

document.body.addEventListener('keydown', (evento) => {
    const novoTexto = document.createElement('h2');
    novoTexto.innerText = `A tecla ${evento.key} foi pressionada!`;
    document.body.appendChild(novoTexto);
})