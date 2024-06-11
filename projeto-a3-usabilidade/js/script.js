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

/*
    Validação de Player
*/

// Objeto para armazenar as informações do jogador
const player = {
    name: "", // Nome do jogador
    score: 0, // Pontuação do jogador
};

// Função para armazenar o nome do jogador
function storePlayerName() {
    // Obtém o nome do jogador do input
    const playerNameInput = document.getElementById('playerName');
    const playerName = playerNameInput.value;
    // Atribui o nome do jogador ao objeto player
    player.name = playerName;

    // Redireciona para a página do quiz
    window.location.href = '../html/quiz.html';
}

