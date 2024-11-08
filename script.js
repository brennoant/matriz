// Função para permitir o arrastar de elementos
function allowDrop(event) {
    event.preventDefault();
}

// Função para arrastar a tarefa
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Função para soltar a tarefa em uma nova seção
function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const taskElement = document.getElementById(taskId);
    event.target.appendChild(taskElement);
}

// Função para adicionar uma nova tarefa à matriz
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskPriority = document.getElementById("taskPriority").value;
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.id = "task-" + new Date().getTime();
        taskElement.draggable = true;
        taskElement.ondragstart = drag;
        taskElement.textContent = taskText;

        document.getElementById(taskPriority).appendChild(taskElement);
        taskInput.value = "";  // Limpa o campo de entrada
    } else {
        alert("Por favor, insira uma tarefa.");
    }
}
