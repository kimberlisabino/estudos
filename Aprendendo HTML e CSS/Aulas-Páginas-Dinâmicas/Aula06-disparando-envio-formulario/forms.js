const form = document.querySelector('form');
const sabores = document.querySelector('#sabores');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const sendForm = async(bodyObject) => {
    try {
        const resposta = await fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(bodyObject),
        headers: {
            'Content-type': 'application/json',
        },
    });
    if(!resposta.ok) {
        throw new Error ('Ops! Algo deu errado no POST!');
    }
} catch (err) {
    throw err;
}
}


form.addEventListener('submit', async(evento) => {
    evento.preventDefault();
    const alLeastOneCheckboxMarked = Array.from(checkboxes).some(item => item.checked);
    if (alLeastOneCheckboxMarked) {
        
        const formData = new FormData(form);
        const body = Object.fromEntries(formData.entries()); // para retornar nome e valor

        body.geladinhos = formData.getAll('geladinhos'); // pra trazer todas as opções já que pode marcar mais de uma

        try {
            await sendForm(body);
            document.body.innerHTML = '<h1>Formulário submetido com sucesso!</h1>';
        } catch (err){
            document.body.innerHTML = '<h1>Ops! Algo deu errado ao submeter o formulário!</h1>';
        }

    } else {
        const feedback = document.createElement('p');
        feedback.innerText = 'preencha ao menos uma opção de sabor';
        feedback.style.color = 'red';

        sabores.appendChild(feedback);
    }
})