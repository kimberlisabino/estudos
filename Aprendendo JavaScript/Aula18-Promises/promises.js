// Promises são usadas para lidar com operações assíncronas, como buscar dados de uma API. Elas têm três estados principais:
// Pending (Pendente) → A promessa está aguardando uma resposta.
// Fulfilled (Resolvida) → A requisição foi bem-sucedida e retornou os dados esperados.
// Rejected (Rejeitada) → Algo deu errado (exemplo: erro na API, conexão falhou).

// const getCatsFacts = () => {
//     fetch('https://meowfacts.herokuapp.com/')
//     .then((resposta) => resposta.json()) // para pegar a resposta (o resultado do fetch) de uma forma legível (json)
//     .then((catFacts) => console.log(catFacts));
// }

// getCatsFacts();

// UTILIZANDO FETCH, THEN E CATCH

const getHarryPotterHouse = () => {
    fetch('https://potterapi-fedeperin.vercel.app/ptt/houses')
    .then((resposta) => {
        if (!resposta.ok) { // pro caso da API não retornar o erro pelo backend
            console.log('A Promise foi rejeitada')
        }
         return resposta.json()
})
    .then((data) => {
        if(data.error) { // se existir um erro, ele captura na mensagem costumizada abaixo
            throw new Error(data.error);
        } 
        console.log('Harry Potter houses:')
    })
    .catch((err) => console.log(err));
}
