// UTILIZANDO ASYNC E AWAIT

const getHarryPotterHouse = async () => { // define que toda a função é assíncrona, não somente o que está dentro dela
   try {
       const resposta =  await fetch('https://potterapi-fedeperin.vercel.app/pt/houses'); // aguarda até que o trecho assíncrono do fecth seja finalizado
       const dados = await resposta.json();
       if(dados.error) {
        throw new Error(data.erro);
       }
       if(!resposta.ok) {
        throw new Error("Ops, algo deu errado");
       }
       console.log("Dados:", dados);
   } catch (err) {
    console.log(err);
   }
   }

getHarryPotterHouse();