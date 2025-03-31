const form = document.querySelector('form');
const sabores = document.querySelector('#sabores');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

form.addEventListener('submit', (evento) => {
    const alLeastOneCheckboxMarked = Array.from(checkboxes).some(item => item.checked); // para verificar se ao menos um checkbox está marcado
    console.log(alLeastOneCheckboxMarked);
    evento.preventDefault();
    if (alLeastOneCheckboxMarked) {
        console.log("Enviando seus dados do formulário...");
        document.body.innerHTML = '<h1>Formulário submetido com sucesso!</h1>';
    } else {
        const feedback = document.createElement('p');
        feedback.innerText = 'preencha ao menos uma opção de sabor';
        feedback.style.color = 'red';

        sabores.appendChild(feedback);
    }
})