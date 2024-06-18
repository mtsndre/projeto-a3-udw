/*
    Perguntas que compõe nosso quiz de futebol, em formato de objeto com:
        - propriedade question (pergunta).
        - outro objeto interno para answers (que exibe três alternativas)
        - propriedade correct (define resposta correta).
*/

const quizData = [
    {
        question: "Quem ganhou a Bola de Ouro da FIFA em 2023?",
        answers: {
            a: "Lionel Messi",
            b: "Cristiano Ronaldo",
            c: "Robert Lewandowski"
        },
        correct: "a"
    },
    {
        question: "Qual time venceu a UEFA Champions League em 2023?",
        answers: {
            a: "Paris Saint-Germain",
            b: "Bayern de Munique",
            c: "Manchester City"
        },
        correct: "c"
    },
    {
        question: "Quem marcou o gol mais rápido na história da Premier League?",
        answers: {
            a: "Alan Shearer",
            b: "Sergio Agüero",
            c: "Ledley King"
        },
        correct: "c"
    },
    {
        question: "Qual jogador detém o recorde de mais gols em uma única temporada da La Liga?",
        answers: {
            a: "Lionel Messi",
            b: "Cristiano Ronaldo",
            c: "Telmo Zarra"
        },
        correct: "a"
    },
    {
        question: "Qual time venceu a Copa do Mundo da FIFA em 2022?",
        answers: {
            a: "Brasil",
            b: "França",
            c: "Argentina"
        },
        correct: "c"
    },
    {
        question: "Quem é o maior artilheiro da história da UEFA Champions League?",
        answers: {
            a: "Lionel Messi",
            b: "Cristiano Ronaldo",
            c: "Raúl"
        },
        correct: "b"
    },
    {
        question: "Qual time venceu a Copa Libertadores em 2023?",
        answers: {
            a: "Flamengo",
            b: "Fluminense",
            c: "Palmeiras"
        },
        correct: "b"
    },
    {
        question: "Quem detém o recorde de mais gols em uma única temporada da Serie A?",
        answers: {
            a: "Gonzalo Higuaín",
            b: "Felice Borel",
            c: "Gino Rossetti"
        },
        correct: "a"
    },
    {
        question: "Qual jogador detém o recorde de mais gols em Copas do Mundo da FIFA?",
        answers: {
            a: "Miroslav Klose",
            b: "Ronaldo Nazário",
            c: "Just Fontaine"
        },
        correct: "a"
    },
    {
        question: "Qual time venceu a Eurocopa em 2020(2021)?",
        answers: {
            a: "Itália",
            b: "Inglaterra",
            c: "Espanha"
        },
        correct: "a"
    },
    {
        question: "Qual clube brasileiro tem o maior número de títulos do Campeonato Brasileiro Série A?",
        answers: {
            a: "São Paulo",
            b: "Flamengo",
            c: "Palmeiras"
        },
        correct: "c"
    },
    {
        question: "Qual é o recorde de público em um jogo de futebol no Brasil? 194 mil torcedores em 1963.",
        answers: {
            a: "Santos vs Corinthians",
            b: "Flamengo vs Vasco da Gama",
            c: "Flamengo vs Fluminense"
        },
        correct: "c"
    },
    {
        question: "Qual jogador brasileiro ganhou a Bola de Ouro da FIFA em 2007?",
        answers: {
            a: "Ronaldinho Gaúcho",
            b: "Kaká",
            c: "Ronaldo Nazário"
        },
        correct: "b"
    },
    {
        question: "Quem é o maior artilheiro da história do Campeonato Brasileiro?",
        answers: {
            a: "Zico",
            b: "Roberto Dinamite",
            c: "Romário"
        },
        correct: "b"
    },
    {
        question: "Qual time brasileiro é conhecido como 'O Glorioso'?",
        answers: {
            a: "Botafogo",
            b: "Flamengo",
            c: "Vasco da Gama"
        },
        correct: "a"
    },
    {
        question: "Qual time tem o maior número de títulos da UEFA Champions League?",
        answers: {
            a: "Real Madrid",
            b: "AC Milan",
            c: "Liverpool"
        },
        correct: "a"
    },
    {
        question: "Qual é o estádio de futebol com a maior capacidade no mundo? Sendo capaz de alocar 150.000 torcedores.",
        answers: {
            a: "Michigan Stadium (Estados Unidos)",
            b: "Camp Nou (Espanha)",
            c: "Estádio Rungrado May Day (Coreia do Norte)"
        },
        correct: "c"
    },
    {
        question: "Qual estádio brasileiro é conhecido como 'O Gigante da Pampulha'?",
        answers: {
            a: "Estádio do Maracanã",
            b: "Estádio do Morumbi",
            c: "Estádio Mineirão"
        },
        correct: "c"
    },
    {
        question: "Qual time mais venceu a UEFA Europa League?",
        answers: {
            a: "Sevilla",
            b: "Manchester United",
            c: "Liverpool"
        },
        correct: "a"
    },
    {
        question: "Quem é o maior vencedor da Bola de Ouro da FIFA?",
        answers: {
            a: "Cristiano Ronaldo",
            b: "Lionel Messi",
            c: "Michel Platini"
        },
        correct: "b"
    },
    {
        question: "Quantos brasileiros já venceram o prêmio Puskás da FIFA?",
        answers: {
            a: "3",
            b: "5",
            c: "0"
        },
        correct: "a"
    },
    {
        question: "Qual time possui o maior número de títulos da Copa do Brasil?",
        answers: {
            a: "Grêmio",
            b: "Cruzeiro",
            c: "Palmeiras"
        },
        correct: "b"
    },
    {
        question: "Quem marcou o gol da vitória do Brasil na final da Copa do Mundo de 2002?",
        answers: {
            a: "Ronaldo",
            b: "Ronaldinho",
            c: "Rivaldo"
        },
        correct: "a"
    },
    {
        question: "Quem marcou o famoso 'Gol de Mão' na Copa do Mundo de 1986?",
        answers: {
            a: "Maradona",
            b: "Pelé",
            c: "Socrates"
        },
        correct: "a"
    },
    {
        question: "Quantas vezes o Boca Juniors venceu a Copa Libertadores?",
        answers: {
            a: "5",
            b: "7",
            c: "6"
        },
        correct: "c"
    },
    {
        question: "Qual clube é conhecido como 'Rei de Copas' por ter conquistado a Libertadores sete vezes?",
        answers: {
            a: "Boca Juniors",
            b: "Independiente",
            c: "River Plate"
        },
        correct: "b"
    },
    {
        question: "Qual jogador foi o artilheiro da Copa do Mundo de 2014?",
        answers: {
            a: "James Rodríguez",
            b: "Lionel Messi",
            c: "Thomas Müller"
        },
        correct: "a"
    },
    {
        question: "Qual clube ganhou a Copa Sul-Americana em 2022?",
        answers: {
            a: "Independiente del Valle",
            b: "São Paulo",
            c: "Lanús"
        },
        correct: "a"
    },
    {
        question: "Quantas Copas do Mundo a Alemanha ganhou?",
        answers: {
            a: "3",
            b: "4",
            c: "5"
        },
        correct: "b"
    },
    {
        question: "Qual jogador detém o recorde de mais assistências na história da Premier League?",
        answers: {
            a: "Ryan Giggs",
            b: "Cesc Fàbregas",
            c: "Frank Lampard"
        },
        correct: "a"
    },
    {
        question: "Quem foi o primeiro brasileiro a ganhar a Bola de Ouro da FIFA?",
        answers: {
            a: "Rivaldo",
            b: "Romário",
            c: "Ronaldo"
        },
        correct: "c"
    },
    {
        question: "Qual seleção venceu a Copa América em 2021?",
        answers: {
            a: "Brasil",
            b: "Argentina",
            c: "Chile"
        },
        correct: "b"
    },
    {
        question: "Qual jogador detém o recorde de mais aparições na história da La Liga?",
        answers: {
            a: "Andoni Zubizarreta",
            b: "Lionel Messi",
            c: "Raúl"
        },
        correct: "a"
    },
    {
        question: "Qual clube detém o recorde de mais títulos do Campeonato Italiano (Serie A)?",
        answers: {
            a: "Inter de Milão",
            b: "AC Milan",
            c: "Juventus"
        },
        correct: "c"
    },
    {
        question: "Quem foi o técnico campeão da Premier League com o Leicester City em 2016?",
        answers: {
            a: "Claudio Ranieri",
            b: "Brendan Rodgers",
            c: "Nigel Pearson"
        },
        correct: "a"
    },
    {
        question: "Qual foi a primeira seleção a vencer a Copa do Mundo da FIFA?",
        answers: {
            a: "Brasil",
            b: "Itália",
            c: "Uruguai"
        },
        correct: "c"
    },
    {
        question: "Quantas vezes Pelé venceu a Copa do Mundo?",
        answers: {
            a: "2",
            b: "3",
            c: "4"
        },
        correct: "b"
    },
    {
        question: "Qual foi o primeiro clube inglês a vencer a UEFA Champions League?",
        answers: {
            a: "Manchester United",
            b: "Liverpool",
            c: "Nottingham Forest"
        },
        correct: "a"
    },
    {
        question: "Quem marcou o gol da vitória do Liverpool na final da Champions League 2018-2019?",
        answers: {
            a: "Mohamed Salah",
            b: "Divock Origi",
            c: "Sadio Mané"
        },
        correct: "b"
    },
    {
        question: "Qual jogador é conhecido como 'El Pibe de Oro'?",
        answers: {
            a: "Lionel Messi",
            b: "Diego Maradona",
            c: "Carlos Tevez"
        },
        correct: "b"
    },
    {
        question: "Quem foi eleito o melhor jogador jovem da Copa do Mundo de 2018?",
        answers: {
            a: "Kylian Mbappé",
            b: "Gabriel Jesus",
            c: "Marcus Rashford"
        },
        correct: "a"
    },
    {
        question: "Qual clube é conhecido como 'Blues'?",
        answers: {
            a: "Manchester City",
            b: "Chelsea",
            c: "Everton"
        },
        correct: "b"
    },
    {
        question: "Quem ganhou o prêmio de melhor goleiro da FIFA em 2020?",
        answers: {
            a: "Alisson Becker",
            b: "Manuel Neuer",
            c: "Jan Oblak"
        },
        correct: "b"
    },
    {
        question: "Quantas vezes Zinedine Zidane venceu a Bola de Ouro?",
        answers: {
            a: "1",
            b: "2",
            c: "3"
        },
        correct: "a"
    }
];