let questions;
let topicCss;
let cssQuestion ;
let topicHtml;
let htmlQuestion;
let topicJs;
let jsQuestion;
let topicPoke;
let poliQuestion;

fetch('quiz.json')
    .then(response => {
        if (!response.ok) {
            alert("Fehler beim Laden der Fragen")
        } else {
            return response.json()
        }
    })
    .then(data => {
        questions = data;
        topicCss = questions[0];
        cssQuestion = topicCss.fragen;
        topicHtml = questions[1];
        htmlQuestion = topicHtml.fragen;
        topicJs = questions[2];
        jsQuestion = topicJs.fragen;
        topicPoke = questions[3];
        poliQuestion = topicPoke.fragen;
        showQuestion()
    })
    let currentQuestion = 0;

function showQuestion(number) {
    number= currentQuestion;
    let question = document.getElementById('question');
    let firstQuestion = cssQuestion[number].frage
    question.innerHTML =/*html*/`
        ${firstQuestion}
    `;
    answers()
}

function answers() {
    number = currentQuestion;
    let answers = document.getElementsByClassName('option');

    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = `${cssQuestion[number].antworten[i]}`
    }
}

function nextQuestion() {
    currentQuestion +=1;
    return showQuestion()
}



function init(){
    let number = document.getElementById('question-number');
    let length = document.getElementById('question-length');
}