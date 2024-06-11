/*
    Funções de Redirecionamento de Página.
*/

// Destino: THE QUESTION D´OR | Sobre
function redirectToAbout() {
    window.location.href = '../html/about.html';
}

// Destino: THE QUESTION D´OR | Meu Jogador
function redirectToMyPlayer() {
    window.location.href = '../html/myPlayer.html'
}

// Destino: THE QUESTION D´OR | Início
function redirectToIndex() {
    window.location.href = '../html/index.html'
}

// Destino: THE QUESTION D´OR | Pontuação
function redirectToScorePage() {
    window.location.href = 'score.html';
}


/*
    Validação de Player
*/

function createPlayer() {
    var playerName = document.getElementById('playerName').value;
    localStorage.setItem('playerName', playerName);
    window.location.href = '../html/quiz.html'; // Redireciona para a outra tela
}


/*
    Exibição de Informações do Usuário Após Final da Rodada de Perguntas.
*/

function showPlayerName() {
    var playerName = localStorage.getItem('playerName');
    if (playerName) {
        document.getElementById('playerNameDisplay').textContent = playerName;
        
    } else {
        document.getElementById('playerNameDisplay').textContent = 'Jogador';
    }
}

// Chama a função quando a página é carregada
window.onload = function() {
    if (document.getElementById('playerNameDisplay')) {
        showPlayerName();
    }
};