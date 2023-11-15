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
    answers();
    init()
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
    refresh();
    return showQuestion()
}

function refresh(){
    let cards = document.getElementsByClassName('option');
    for(let i = 0; i<cards.length; i++){
        cards[i].style.pointerEvents="all",
        cards[i].style.backgroundColor="white",
        cards[i].addEventListener("mouseenter",mEnter),        
        cards[i].addEventListener("mouseout",mOut)

    }
}


function init(){
    let number = document.getElementById('question-number');
    let length = document.getElementById('question-length');

    number.innerHTML=`${currentQuestion+1}`
    length.innerHTML=`${cssQuestion.length}&nbsp`
}

function choice(id){
    let choice = document.getElementById(`${id}`);
    let cards = document.getElementsByClassName('option');
    let number = currentQuestion;
    if(choice.innerText == cssQuestion[number].richtige_antwort){
        choice.style.backgroundColor="green"
    }else{
        choice.style.backgroundColor="red"
    };
    for(let i = 0; i<cards.length; i++){
        cards[i].style.pointerEvents="none",
        cards[i].removeEventListener("mouseenter",mEnter),
        cards[i].removeEventListener("mouseout",mOut)
    }
}

function mEnter(){
    this.style.backgroundColor="rgba(0,0,0,0.1)"
}

function mOut(){
    this.style.backgroundColor="white"
}