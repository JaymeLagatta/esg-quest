// Navega��o entre abas
function openTab(tabId) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove a classe active de todos os bot�es
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });

    // Mostra a aba selecionada
    document.getElementById(tabId).classList.add('active');

    // Ativa o bot�o correspondente
    document.querySelectorAll('.nav-button').forEach(button => {
        if (button.textContent.toLowerCase().includes(tabId)) {
            button.classList.add('active');
        }
    });
}

// Simula��o de logout
function logout() {
    alert('Voc� foi desconectado com sucesso!');
    // Aqui voc� adicionaria a l�gica real de logout
}

// Completa a tarefa
function completeTask() {
    const completeButton = document.getElementById('completeTask');
    const progressFill = document.querySelector('.progress-fill');

    // Desabilita o bot�o para evitar m�ltiplos cliques
    completeButton.disabled = true;
    completeButton.textContent = 'Conclu�do!';
    completeButton.style.backgroundColor = '#27ae60';

    // Atualiza a barra de progresso
    progressFill.style.width = '60%'; // Aumenta o progresso

    // Mostra mensagem de sucesso
    setTimeout(() => {
        alert('Parab�ns! Voc� completou o desafio e ganhou 50 pontos!');

        // Adicionar l�gica para atualizar o n�vel do usu�rio
        // tipo updateUserLevel();
    }, 500);
}

// Atualiza o n�vel do usu�rio (exemplo)
function updateUserLevel() {
    // Esta fun��o seria chamada ap�s completar tarefas suficientes
    const levelName = document.querySelector('.level-name');
    const levelBadge = document.querySelector('.level-badge');

    // Simula��o de subida de n�vel
    levelName.textContent = 'Sustent�vel Intermedi�rio';
    levelBadge.src = 'images/nivel-intermediario.png';
    alert('Parab�ns! Voc� subiu para o n�vel Intermedi�rio!');
}

// Inicializa��o
document.addEventListener('DOMContentLoaded', () => {
    // Configura o bot�o de logout
    document.querySelector('.logout').addEventListener('click', logout);

    // Configura o bot�o de completar tarefa (se existir na p�gina)
    if (document.getElementById('completeTask')) {
        document.getElementById('completeTask').addEventListener('click', completeTask);
    }
});
// Fun��o para destacar o usu�rio atual no ranking
function highlightCurrentUser() {
    const currentUserRow = document.querySelector('.current-user');
    if (currentUserRow) {
        currentUserRow.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Atualize a fun��o de inicializa��o para chamar o highlight
document.addEventListener('DOMContentLoaded', () => {
    // Configura��es anteriores...
    highlightCurrentUser();
});

// Atualiza os �cones de progresso conforme o n�vel do usu�rio
function updateProgressIcons(currentLevel) {
    const icons = document.querySelectorAll('.shape-icon');

    icons.forEach(icon => {
        const iconLevel = parseInt(icon.dataset.level);

        if (iconLevel <= currentLevel) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}

// Na inicializa��o, defina o n�vel atual de 1 a 7
document.addEventListener('DOMContentLoaded', () => {
    updateProgressIcons(2); // Altere este n�mero 
});

