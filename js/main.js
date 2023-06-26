// Array com perguntas e respostas sobre comandos SQL
const questions = [
    { question: "Qual comando SQL e usado para selecionar dados de uma tabela?", answer: "SELECT" },
    { question: "Qual comando SQL e usado para atualizar dados em uma tabela?", answer: "UPDATE" },
    { question: "Qual comando SQL e usado para excluir dados de uma tabela?", answer: "DELETE" },
    { question: "Qual comando SQL e usado para inserir dados em uma tabela?", answer: "INSERT" }
];

// Seleciona elementos do HTML
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");

// Variáveis para controle das perguntas
let currentQuestion = 0;
let score = 0;

// Função para verificar a resposta e avançar para a próxima pergunta
function checkAnswer() {
    const userAnswer = answerElement.value.toUpperCase();
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        score++;
        resultElement.textContent = "Resposta correta!";
    } else {
        resultElement.textContent = "Resposta incorreta. A resposta correta é: " + correctAnswer;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}

// Função para exibir a próxima pergunta
function showQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    answerElement.value = "";
    resultElement.textContent = "";
}

// Função para exibir a pontuação final
function showFinalScore() {
    questionElement.textContent = "Você completou o questionário!";
    answerElement.style.display = "none";
    resultElement.textContent = "Sua pontuação final é: " + score + " de " + questions.length;
}

// Inicializa a primeira pergunta
showQuestion();