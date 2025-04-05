
const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Ahmedabad","Chennai","Dehli","Mumbai"],
        correct: "Dehli"
    },
    {
        question: "Who is The dean of PIET ?",
        options: ["Vipul sir","Devanshu Sir","Daxa Mam","Sujoy Sir"],
        correct: "Vipul sir"
    },
    {
        question: "Which branch is best in PIET?",
        options: ["Core","BDA","AI","Cyber"],
        correct: "Cyber"
    },
    {
        question: "Which amine is Sujoy sir's favourite?",
        options: ["One Punch","Solo leveling","Demon Slayer","Attack on Titan"],
        correct: "Attack on Titan"
    },
    {
        question: "WHich course we receently started?",
        options: ["JAVA","Python","HTML","CSS","JS"],
        correct: "JS"
    },
    {
        question: "How much do you rate this quiz?",
        options: ["5","first option","second option","all of the above"],
        correct: "all of the above"
    }
];


function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    let output = '';

    quizData.forEach((quizItem, index) => {
        output += `
            <div class="question">
                <h3>${index + 1}. ${quizItem.question}</h3>
                <div class="options">
        `;
        
        quizItem.options.forEach(option => {
            output += `
                <input type="radio" name="question${index}" value="${option}">
                ${option}<br>
            `;
        });
        
        output += '</div></div>';
    });

    quizContainer.innerHTML = output;
}

function checkAnswers() {

    let score = 0;
    const totalQuestions = quizData.length;

    quizData.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === quizItem.correct) {
            score++;
        }
    });

    const result = document.getElementById('result');
    result.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
    
    const percentage = (score / totalQuestions) * 100;
    result.innerHTML += ` (${percentage.toFixed(1)}%)`;
}

window.onload = loadQuiz;