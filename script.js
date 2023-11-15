let questions;
let topicCss;
let cssQuestion;
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


//render question; initate further actions
function showQuestion(number) {
    number = currentQuestion;
    let question = document.getElementById('question');
    let firstQuestion = cssQuestion[number].frage
    question.innerHTML =/*html*/`
        <b>${firstQuestion}</b>
    `;
    answers();
    init()
}


//answer rendering
function answers() {
    number = currentQuestion;
    let answers = document.getElementsByClassName('option');
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = `${cssQuestion[number].antworten[i]}`
    }
}


//next question; restoring css properties
function nextQuestion() {
    currentQuestion += 1;
    refresh();
    return showQuestion()
}


//reactivate default css for cards
function refresh() {
    let cards = document.getElementsByClassName('option');
    let button = document.getElementById("next");
    for (let i = 0; i < cards.length; i++) {
        cards[i].parentNode.style.pointerEvents = "all",
            cards[i].parentNode.classList.remove('bg-success'),
            cards[i].parentNode.classList.remove('bg-danger'),
            cards[i].parentNode.addEventListener("mouseenter", mEnter),
            cards[i].parentNode.addEventListener("mouseout", mOut)
        cards[i].style.color = "black"
    }
    button.disabled = true
}

// actual question and amount of questions
function init() {
    let number = document.getElementById('question-number');
    let length = document.getElementById('question-length');
    number.innerHTML = `<b>${currentQuestion + 1}</b>`
    length.innerHTML = `<b>${cssQuestion.length}</b>&nbsp`
}


//result of clicked option
function choice(id) {
    let choice = document.getElementById(`${id}`);
    let number = currentQuestion;
    if (choice.innerText !== cssQuestion[number].richtige_antwort) {
        choice.parentNode.classList.add('bg-danger')
    };
    choice.style.color = "white";
    changeCss();
}

function mEnter() {
    this.style.backgroundColor = "rgba(0,0,0,0.1)"
}

function mOut() {
    this.style.backgroundColor = "white"
};


//disable further clickEvents after choosing an answer/css-changes
function changeCss() {
    let cards = document.getElementsByClassName('option');
    let number = currentQuestion;
    let button = document.getElementById("next");
    for (let i = 0; i < cards.length; i++) {
        cards[i].parentNode.style.pointerEvents = "none",
            cards[i].parentNode.removeEventListener("mouseenter", mEnter),
            cards[i].parentNode.removeEventListener("mouseout", mOut)
        if (cards[i].innerText == cssQuestion[number].richtige_antwort) {
            cards[i].parentNode.classList.add('bg-success')
            cards[i].style.color = "white"
        }
    };
    button.disabled = false;
}

function calcScreen(){
    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
    let navbar = document.getElementById
}