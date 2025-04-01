const title = document.querySelector('h1');
setTimeout(() => {
    title.textContent = 'Título mudou'
}, 5000); // vai ser executado somente depois de 5 segundos
title.style.color = 'red'; // executado instantaneamente devido assíncronissidade

