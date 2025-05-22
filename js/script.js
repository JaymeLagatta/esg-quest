// Navegação entre abas
function openTab(tabId) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove a classe active de todos os botões
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });

    // Mostra a aba selecionada
    document.getElementById(tabId).classList.add('active');

    // Ativa o botão correspondente
    document.querySelectorAll('.nav-button').forEach(button => {
        if (button.textContent.toLowerCase().includes(tabId)) {
            button.classList.add('active');
        }
    });
}

// Simulação de logout
function logout() {
    alert('Você foi desconectado com sucesso!');
    // Aqui você adicionaria a lógica real de logout
}

// Completa a tarefa
function completeTask() {
    const completeButton = document.getElementById('completeTask');
    const progressFill = document.querySelector('.progress-fill');

    // Desabilita o botão para evitar múltiplos cliques
    completeButton.disabled = true;
    completeButton.textContent = 'Concluído!';
    completeButton.style.backgroundColor = '#27ae60';

    // Atualiza a barra de progresso
    progressFill.style.width = '60%'; // Aumenta o progresso

    // Mostra mensagem de sucesso
    setTimeout(() => {
        alert('Parabéns! Você completou o desafio e ganhou 50 pontos!');

        // Adicionar lógica para atualizar o nível do usuário
        // tipo updateUserLevel();
    }, 500);
}

// Atualiza o nível do usuário (exemplo)
function updateUserLevel() {
    // Esta função seria chamada após completar tarefas suficientes
    const levelName = document.querySelector('.level-name');
    const levelBadge = document.querySelector('.level-badge');

    // Simulação de subida de nível
    levelName.textContent = 'Sustentável Intermediário';
    levelBadge.src = 'images/nivel-intermediario.png';
    alert('Parabéns! Você subiu para o nível Intermediário!');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Configura o botão de logout
    document.querySelector('.logout').addEventListener('click', logout);

    // Configura o botão de completar tarefa (se existir na página)
    if (document.getElementById('completeTask')) {
        document.getElementById('completeTask').addEventListener('click', completeTask);
    }
});
// Função para destacar o usuário atual no ranking
function highlightCurrentUser() {
    const currentUserRow = document.querySelector('.current-user');
    if (currentUserRow) {
        currentUserRow.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Atualize a função de inicialização para chamar o highlight
document.addEventListener('DOMContentLoaded', () => {
    // Configurações anteriores...
    highlightCurrentUser();
});

// Atualiza os ícones de progresso conforme o nível do usuário
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

// Na inicialização, defina o nível atual de 1 a 7
document.addEventListener('DOMContentLoaded', () => {
    updateProgressIcons(2); // Altere este número 
});

