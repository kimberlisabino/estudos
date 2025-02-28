// Array com valores de objetos

const notasFinais = [
    {nome: "Beatriz", nota: 5},
    {nome: "Matheus", nota: 7},
    {nome: "Amanda", nota: 10},
    {nome: "Paula", nota: 5},
]

// Utilizando o loop FOR
for (let i = 0; i < notasFinais.length; i++) {
    if(notasFinais[i].nota >= 6) {
        console.log(`O aluno ${notasFinais[i].nome} está Aprovado com ${notasFinais[i].nota}`)
    } else {
        console.log(`O aluno ${notasFinais[i].nome} está Reprovado com ${notasFinais[i].nota}`)
    }
}

// Utilizando FOR OF
for(let aluno of notasFinais) {
    if(aluno.nota >= 6) {
     console.log(`O aluno ${aluno.nome} está Aprovado com ${aluno.nota}`)
 } else {
      console.log(`O aluno ${aluno.nome} está Reprovado com ${aluno.nota}`)
   }
}

// Utilizando FOR EACH
notasFinais.forEach((aluno) => {
    if(aluno.nota >= 6) {
        console.log(`O aluno ${aluno.nome} está Aprovado com ${aluno.nota}`)
    } else {
         console.log(`O aluno ${aluno.nome} está Reprovado com ${aluno.nota}`)
      }
});

