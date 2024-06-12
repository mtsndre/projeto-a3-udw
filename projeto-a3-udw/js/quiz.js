// Elementos DOM necessários
const quizContainer = document.getElementById('quiz'); // Quiz. 
const nextBtn = document.getElementById('next-btn'); // Botão de próximo.
const submitBtn = document.getElementById('submit-btn'); // Botão de finalizar.
const resultGif = document.getElementById('result-gif'); // Gif a ser exibido.
const gifContainer = document.getElementById('gif-container'); // Área de exibição do gif.

// Variáveis globais para acompanhar o índice da pergunta atual, pontuação e nome do usuário.
let currentQuestionIndex = 0;
let score = 0;
let username = '';

// Variáveis para controle do modo de jogo, limite de perguntas e array para auxiliar em exibir perguntas de forma aleatória:
let gameMode = '';
let questionLimit = 0;
let shuffledQuizData = [];

// Função para mostrar a tela de início do jogo
function showGameStart() {
    document.getElementById('introduction-container').style.display = 'none';
    document.getElementById('username-container').style.display = 'block';
}

// Função para iniciar o quiz após inserir o nome de usuário, solicitando assim que o usuário escolha um modo de jogo, que define quantidade de perguntas.
function startQuiz() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('username-container').style.display = 'none';
        document.getElementById('game-mode-container').style.display = 'block';
    } else {
        alert("Por favor, digite seu nome para iniciar o quiz.");
    }
}

// Função para selecionar o modo de jogo e iniciar o quiz
function selectGameMode(mode) {
    gameMode = mode;
    document.getElementById('game-mode-container').style.display = 'none';
    quizContainer.style.display = 'block';
    nextBtn.style.display = 'inline';

    // Definindo o limite de perguntas com base no modo de jogo selecionado
    if (mode === 'easy') {
        questionLimit = 5;
    } else if (mode === 'normal') {
        questionLimit = 10;
    } else if (mode === 'hard') {
        questionLimit = 20;
    }

    // Embaralhar os dados do quiz e carregar a primeira pergunta
    shuffledQuizData = shuffleArray(quizData.slice());
    loadQuestion(currentQuestionIndex);
}

// Função para embaralhar um array, isso se deve ao fato de que as perguntas precisam ser exibidas de forma aleatória, visando atenção do usuário durante o uso.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para carregar uma pergunta na tela.
function loadQuestion(index) {
    const questionData = shuffledQuizData[index];
    const quizHtml = `
        <div class="quiz-question">
            <p>${questionData.question}</p>
            ${Object.keys(questionData.answers).map(key => {
                return `<label class="quiz-answer">
                            <input type="radio" name="question${index}" value="${key}">
                            ${questionData.answers[key]}
                        </label>`;
            }).join('')}
        </div>
    `;

    // Exibição da estrutura da questão.
    quizContainer.innerHTML = quizHtml;
}

// Função para avançar para a próxima pergunta.
function nextQuestion() {
    const selected = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selected) {
        if (selected.value === shuffledQuizData[currentQuestionIndex].correct) {
            // Adiciona +1 a cada resposta correta.
            score++;
        }
        currentQuestionIndex++;
        // Carregar questão de forma aleatória enquanto o index da questão for menor que o limite de questões a serem exibidas.
        if (currentQuestionIndex < shuffledQuizData.length && currentQuestionIndex < questionLimit) {
            loadQuestion(currentQuestionIndex);
        } else {
            // Exibir botão de Finalizar após completar sequência de perguntas.
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline';
            submitBtn.style.background = 'red';
        }
    } else {
        alert("Por favor, selecione uma resposta antes de continuar.");
    }
}

// Função para finalizar a sequência de perguntas e exibir pontuação e nome do ususário.
function submitQuiz() {
    document.getElementById('result').innerText = `${username}, você acertou ${score} de ${questionLimit} perguntas!`;
    quizContainer.innerHTML = '';
    submitBtn.style.display = 'none';
    showGifBasedOnScore(score);
}

// Função para mostrar um gif com base na pontuação do usuário.
function showGifBasedOnScore(score) {
    let gifUrl = '';
    if (score === 0) {
        gifUrl = '../gif/cr7-pontuacao-pessima.gif';
    } else if (questionLimit == 5 && score >= 1 && score <= 2 || questionLimit == 10 && score >= 1 && score <= 4 || questionLimit == 20 && score >= 1 && score <= 5) {
        gifUrl = '../gif/neto-pontuacao-ruim.gif';
    } else if (questionLimit == 5 && score == 3 || questionLimit == 10 && score >= 3 && score <= 6 || questionLimit == 20 && score >= 6 && score <= 12) {
        gifUrl = '../gif/neymar-pontuacao-mediana.gif';
    } else if (questionLimit == 5 && score == 4 || questionLimit == 10 && score >= 7 && score <= 9 || questionLimit == 20 && score >= 13 && score <= 19) {
        gifUrl = '../gif/cr7-pontuacao-boa.gif';
    } else if (questionLimit == score) {
        gifUrl = '../gif/neto-pontuacao-otima.gif';
    }

    resultGif.src = gifUrl;
    gifContainer.style.display = 'block';
}

// Função para voltar à tela de início.
function goBackToIntro() {
    window.location.href = 'index.html';
}
