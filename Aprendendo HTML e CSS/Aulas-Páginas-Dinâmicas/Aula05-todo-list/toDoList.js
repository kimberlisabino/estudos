const button = document.querySelector('button'); // Selecionar o botão do HTML

button.addEventListener('click', () => { // Ouvindo o evento de click no botão
    const tasksList = document.querySelector('.tasksContainer'); // Selecionar a lista de tarefas
    const input = document.querySelector('input'); // Selecionar o input onde serão inseridas as tarefas
    const newTask = document.createElement('li'); // Criar os itens que vão compor a lista
    const taskText = document.createElement('span'); // Colocando o texto do input em um span separa para estilização depois
    taskText.innerText = input.value; // Determinando uqe o span vai conter o valor do input do usuário
    newTask.appendChild(taskText); // Adicionado o span de texto ao item da lista de tarefa
    newTask.id = 'listItem'; // Inseriando ID na li para estilizar elementos
    
    if(input.value)
        tasksList.appendChild(newTask); // Adicionar os itens na lista de tarefas no momento do click
    input.value = '';
    
    // Inserindo checkbox
    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    newTask.prepend(taskCheckBox); // Usando o prepend para que o checkbox apareça antes do texto
    
    // Inserindo botão para deletar tarefa
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Excluir';
    newTask.appendChild(deleteButton);

    // Removendo tarefa com o botão de delete
    deleteButton.addEventListener ('click', () => {
        newTask.remove();
        deleteButton.remove();
    ;})

    // Estilizando texto para o evento de click no checkbox
    taskCheckBox.addEventListener ('click', () => {
        if(taskCheckBox.checked) {
            taskText.style.textDecoration = 'line-through';
            taskText.style.color = 'gray';
        } else {
            taskText.style.textDecoration = 'none';
            taskText.style.color = 'black';
        }
    })

})


