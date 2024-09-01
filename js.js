// Seleciona os elementos do DOM
const inputNewTask = document.getElementById('new-task');
const addButton = document.getElementById('create');
const list = document.getElementById('list');

// Função para criar uma nova tarefa
function newTask() {
    const task = inputNewTask.value;

    if (task !== '') {
        // Cria um novo item de lista (li)
        const li = document.createElement('li');
        li.textContent = task;

        // Cria botão de "Concluir"
        const concludedButton = document.createElement('button');
        concludedButton.textContent = 'Concluir';
        concludedButton.className = 'concludedButton';
        concludedButton.onclick = () => concludedTask(li);

        // Cria botão de "Remover"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.className = 'deleteButton';
        deleteButton.onclick = () => deleteTask(li);

        // Adiciona os botões ao item da lista
        li.appendChild(concludedButton);
        li.appendChild(deleteButton);

        // Adiciona o item à lista de tarefas
        list.appendChild(li);

        // Limpa o campo de entrada
        inputNewTask.value = '';
    }
}

// Função para marcar uma tarefa como concluída
function concludedTask(task) {
    task.style.textDecoration = 'line-through';
    task.style.color = 'grey';
}

// Função para remover uma tarefa
function deleteTask(task) {
    list.removeChild(task);
}

// Evento de clique para adicionar nova tarefa
addButton.addEventListener('click', newTask);

// Permite adicionar tarefas pressionando "Enter"
inputNewTask.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        newTask();
    }
});
