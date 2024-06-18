#### Visão Geral do Projeto
"THE QUESTION D'OR" é um jogo de quiz interativo baseado na web, projetado para os entusiastas do futebol. Os jogadores podem escolher o nível de dificuldade e responder a uma série de perguntas relacionadas ao futebol para testar seus conhecimentos. O projeto inclui uma estrutura HTML, CSS para estilização e JavaScript para funcionalidade e interatividade.


---

#### Estrutura dos Arquivos
1. **index.html**: O arquivo HTML principal que configura a estrutura da página web.
2. **style.css**: O arquivo CSS que estiliza o quiz.
3. **questions.js**: Contém as perguntas do quiz.
4. **quiz.js**: Contém a lógica para a funcionalidade do quiz.


#### Instruções de Configuração
1. **HTML**:
    - O arquivo HTML configura a estrutura básica e links para os arquivos CSS e JavaScript necessários.
    - As seções importantes incluem a introdução, entrada de nome do usuário, seleção do modo de jogo, exibição do quiz e exibição dos resultados.

2. **CSS**:
    - O arquivo CSS contém estilos para o corpo, container do quiz, botões e vários outros elementos para garantir um design coeso e visualmente atraente.
    - Utiliza flexbox para centralizar elementos e fornece efeitos de hover para uma melhor experiência do usuário.

3. **JavaScript**:
    - `questions.js` contém o array de perguntas com respostas possíveis.
    - `quiz.js` contém funções para iniciar o jogo, entrada do nome do usuário, seleção do modo de jogo, carregamento de perguntas e exibição de resultados.
    - Gerencia o fluxo do quiz e calcula pontuações.


#### Validações
1. **Nome do Usuário**:
    - O campo de nome do usuário deve ser preenchido antes de iniciar o quiz.
    - Se o campo estiver vazio, uma mensagem de erro será exibida solicitando que o usuário insira um nome.

2. **Respostas do Quiz**:
    - O usuário deve selecionar uma resposta para cada pergunta.
    - Se uma pergunta não for respondida, uma mensagem de erro será exibida solicitando que o usuário escolha uma resposta antes de prosseguir para a próxima pergunta.

---

#### Funcionamento
1. **Iniciando o Jogo**:
    - Abra o `index.html` em um navegador web.
    - Clique em "Iniciar Jogo" para começar.

2. **Entrada do Nome do Usuário**:
    - Digite seu nome no campo de entrada fornecido.
    - Clique em "Iniciar Quiz" para prosseguir.

3. **Seleção do Modo de Jogo**:
    - Escolha um modo de jogo: Fácil, Normal ou Difícil.
    - Clique no botão correspondente para iniciar o quiz.

4. **Respondendo Perguntas**:
    - As perguntas serão exibidas uma de cada vez.
    - Selecione uma resposta clicando em uma das opções.
    - Clique em "Próxima" para ir para a próxima pergunta.

5. **Finalizando o Quiz**:
    - Após responder todas as perguntas, clique em "Finalizar Quiz" para enviar.
    - Veja seu resultado.

---

#### Informações Adicionais
- Certifique-se de que todos os caminhos no `index.html` para os arquivos CSS e JS estejam corretos.

---

**Tecnologias Utilizadas:**
- Bootstrap
- CSS
- HTML
- JavaScript

---

#### Créditos
- *Gabriel Sabatini de Oliveira* - 125111355020
- *Giuliano D'Agosto Neto* - 125111363272
- *Kauã Amadeu Souza* - 125111348553
- *Matheus André da Silva* - 125111367931
- *Matheus Guerreiro* - 125111352906
- *Thiago Ribeiro Guerreiro* - 125221101587
