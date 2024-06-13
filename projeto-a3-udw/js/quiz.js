// Declaração de variáveis globais para elementos HTML e variáveis de estado do jogo
const quizContainer = document.getElementById('quiz'); // Container onde as perguntas serão exibidas
const nextBtn = document.getElementById('next-btn'); // Botão para avançar para a próxima pergunta
const submitBtn = document.getElementById('submit-btn'); // Botão para finalizar o quiz
const resultGif = document.getElementById('result-gif'); // Elemento para exibir o GIF de resultado
const gifContainer = document.getElementById('gif-container'); // Container para o GIF de resultado

// Variáveis de controle do jogo
let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0; // Pontuação do jogador
let username = ''; // Nome do jogador

let gameMode = ''; // Modo de jogo selecionado ('easy', 'normal', 'hard')
let questionLimit = 0; // Limite de perguntas com base no modo de jogo
let shuffledQuizData = []; // Array de dados das perguntas embaralhado

// Função para exibir a tela de início do jogo
function showGameStart() {
    document.getElementById('introduction-container').style.display = 'none';
    document.getElementById('username-container').style.display = 'block';
}

// Função para iniciar o quiz após inserir o nome do usuário
function startQuiz() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('username-container').style.display = 'none';
        document.getElementById('game-mode-container').style.display = 'block';
    } else {
        // Se o usuário não inserir um nome, destaca o campo de entrada
        document.getElementById('username').style.border = '2px solid #dc0909';
        document.getElementById('username').style.backgroundColor = '#fff';
        document.getElementById('username').placeholder = 'Digite seu nome para continuar.';
    }
}

// Função para selecionar o modo de jogo (fácil, normal, difícil)
function selectGameMode(mode) {
    gameMode = mode;
    document.getElementById('game-mode-container').style.display = 'none';
    quizContainer.style.display = 'block';
    nextBtn.style.display = 'inline';

    // Define o número máximo de perguntas com base no modo de jogo selecionado
    if (mode === 'easy') {
        questionLimit = 5;
    } else if (mode === 'normal') {
        questionLimit = 10;
    } else if (mode === 'hard') {
        questionLimit = 20;
    }

    // Embaralha o array de dados das perguntas e carrega a primeira pergunta
    shuffledQuizData = shuffleArray(quizData.slice()); // A função shuffleArray está definida em algum lugar não fornecido
    loadQuestion(currentQuestionIndex);
}

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para carregar e exibir uma pergunta
function loadQuestion(index) {
    const questionData = shuffledQuizData[index];
    const answers = Object.keys(questionData.answers).map(key => ({
        key: key,
        answer: questionData.answers[key]
    }));
    const quizHtml = `
        <div class="quiz-question">
            <p>${questionData.question}</p>
            ${answers.map(answer => `
                <button class="quiz-answer" data-key="${answer.key}" onclick="selectAnswer(this)">
                    ${answer.answer}
                </button>
            `).join('')}
        </div>
    `;
    quizContainer.innerHTML = quizHtml;
}

// Função para selecionar uma resposta
function selectAnswer(button) {
    const buttons = document.querySelectorAll('.quiz-answer');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    const selectedButton = document.querySelector('.quiz-answer.selected');
    if (selectedButton) {
        const selectedKey = selectedButton.getAttribute('data-key');
        if (selectedKey === shuffledQuizData[currentQuestionIndex].correct) {
            score++; // Incrementa a pontuação se a resposta estiver correta
        }
        currentQuestionIndex++; // Avança para a próxima pergunta

        // Verifica se ainda há perguntas para carregar
        if (currentQuestionIndex < shuffledQuizData.length && currentQuestionIndex < questionLimit) {
            loadQuestion(currentQuestionIndex); // Carrega a próxima pergunta
        } else {
            nextBtn.style.display = 'none'; // Esconde o botão 'Próxima' ao finalizar as perguntas
            submitBtn.style.display = 'inline'; // Exibe o botão 'Finalizar Quiz'
        }

        document.getElementById('text-info').style.display = 'none'; // Esconde o texto informativo
    } else {
        document.getElementById('text-info').style.display = 'block'; // Exibe o texto informativo caso nenhuma resposta seja selecionada
    }
}

// Função para finalizar o quiz e exibir os resultados
function submitQuiz() {
    document.getElementById('result').innerText = `${username}, você acertou ${score} de ${questionLimit} perguntas!`; // Exibe a mensagem de resultado
    quizContainer.innerHTML = ''; // Limpa o conteúdo do container de perguntas
    submitBtn.style.display = 'none'; // Esconde o botão 'Finalizar Quiz'
    showGifBasedOnScore(score); // Exibe o GIF de resultado com base na pontuação obtida
}

// Função para exibir o GIF de resultado com base na pontuação
function showGifBasedOnScore(score) {
    let gifUrl = '';

    // Define o URL do GIF com base na pontuação e no limite de perguntas
    if (score === 0) {
        gifUrl = '../gif/cr7-pontuacao-pessima.gif';
    } else if ((questionLimit == 5 && score >= 1 && score <= 2) || 
               (questionLimit == 10 && score >= 1 && score <= 4) || 
               (questionLimit == 20 && score >= 1 && score <= 5)) {
        gifUrl = '../gif/neto-pontuacao-ruim.gif';
    } else if ((questionLimit == 5 && score == 3) || 
               (questionLimit == 10 && score >= 3 && score <= 6) || 
               (questionLimit == 20 && score >= 6 && score <= 12)) {
        gifUrl = '../gif/neymar-pontuacao-mediana.gif';
    } else if ((questionLimit == 5 && score == 4) || 
               (questionLimit == 10 && score >= 7 && score <= 9) || 
               (questionLimit == 20 && score >= 13 && score <= 19)) {
        gifUrl = '../gif/cr7-pontuacao-boa.gif';
    } else if (questionLimit == score) {
        gifUrl = '../gif/neto-pontuacao-otima.gif';
    }

    resultGif.src = gifUrl; // Define o URL do GIF no elemento de resultado
    gifContainer.style.display = 'block'; // Exibe o container do GIF de resultado
}

// Função para retornar à página inicial do jogo
function goBackToIntro() {
    window.location.href = 'index.html'; // Redireciona para a página inicial
}
