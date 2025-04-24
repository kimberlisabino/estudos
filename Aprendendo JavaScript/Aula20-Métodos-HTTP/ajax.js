const getPosts = async () => {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dados = await resposta.json();
        if (!resposta.ok) {
            throw new Error('Ops! Algo deu errado no GET!');
        }
        console.log("Dados do GET: ", dados);
    } catch (err) {
        console.log(err);
    }

}

// Método GET - para buscar dados
getPosts();

// Método POST - para enviar dados pro back através da API (normalmente para criar um novo registro no banco de dados)
const publishNewPost = async() => {
    try {
        const resposta = await fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json', // especificando o tipo de conteúdo que vai ser enviado
        },
    });
    const dados = await resposta.json();
    if(dados.error) {
        throw new Error(data.error);
    }
    if(!resposta.ok) {
        throw new Error ('Ops! Algo deu errado no POST!');
    }
    console.log('Resposta do POST: ', dados);
} catch (err) {
    console.log(err);
}
}

publishNewPost();

// Método PUT - para alterar algum registro do banco de dados
const editPost = async() => {
    try {
        const resposta = await fetch ('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const dados = await resposta.json();
    if(dados.error) {
        throw new Error(data.error);
    }
    if(!resposta.ok) {
        throw new Error ('Ops! Algo deu errado no POST!');
    }
    console.log('Resposta do PUT: ', dados);
} catch (err) {
    console.log(err);
}
}

editPost();

// Método PATCH - para editar uma propriedade do registro do banco
const editPostTitle = async() => {
    try {
        const resposta = await fetch ('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const dados = await resposta.json();
    if(dados.error) {
        throw new Error(data.error);
    }
    if(!resposta.ok) {
        throw new Error ('Ops! Algo deu errado no PATCH!');
    }
    console.log('Resposta do PATCH: ', dados);
} catch (err) {
    console.log(err);
}
}

editPostTitle();

// Método DELETE - para deletar um registro

const deletePost = async() => {
    try {
        const resposta = await fetch ('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
        });
    const dados = await resposta.json();
    if(dados.error) {
        throw new Error(data.error);
    }
    if(!resposta.ok) {
        throw new Error ('Ops! Algo deu errado no DELETE!');
    }
} catch (err) {
    console.log(err);
}
}

deletePost();