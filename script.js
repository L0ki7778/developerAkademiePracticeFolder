let questions;
let questionVar;
let topicCss;
let cssQuestion;
let topicHtml;
let htmlQuestion;
let topicJs;
let jsQuestion;
let topicPoke;
let poliQuestion;
let currentQuestion = 0;
let counter=0;

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
    })


//render question; initate further actions
function showQuestion(number) {
    number = currentQuestion;
    let question = document.getElementById('question');
    let firstQuestion = questionVar[number].frage
    question.innerHTML =/*html*/`
        <b>${firstQuestion}</b>
    `;
    answers();
    questionNumbers()
}


//answer rendering
function answers() {
    number = currentQuestion;
    let answers = document.getElementsByClassName('option');
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = `${questionVar[number].antworten[i]}`
    }
}


//next question; restoring css properties
function nextQuestion() {
    currentQuestion += 1;
    if(currentQuestion == questionVar.length){
        if(questionVar==cssQuestion){
            return winScreen('css')
        }else if(questionVar==htmlQuestion){
            return winScreen('html')
        }else if(questionVar==jsQuestion){
            return winScreen('js')
        }
    }
    if (currentQuestion !== questionVar.length) {
        lastQuestionBtn();
        refresh();
        return showQuestion(number, questionVar)
    }
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
function questionNumbers() {
    let number = document.getElementById('question-number');
    let length = document.getElementById('question-length');
    number.innerHTML = `<b>${currentQuestion + 1}</b>`
    length.innerHTML = `<b>${questionVar.length}</b>&nbsp`
}


//result of clicked option
function choice(id) {
    let choice = document.getElementById(`${id}`);
    let number = currentQuestion;
    if (choice.innerText !== questionVar[number].richtige_antwort) {
        choice.parentNode.classList.add('bg-danger')
    }else{
        counter+=1
    };
    choice.style.color = "white";
    changeCss();
    increaseProgress()
}


//events for "js"-hover
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
        if (cards[i].innerText == questionVar[number].richtige_antwort) {
            cards[i].parentNode.classList.add('bg-success')
            cards[i].style.color = "white"
        }
    };
    button.disabled = false;
}


//configurates all functions for the specific topic
function generateQuestionCard(topic) {
    counter=0;
    currentQuestion=0;
    let number = currentQuestion;
    if (topic === 'js') {
        questionVar = jsQuestion;
    } else if (topic === 'css') {
        questionVar = cssQuestion;
    } else if (topic === 'html') {
        questionVar = htmlQuestion;
    }
    return generateBlankCard(),
        showQuestion(number),
        onclickDistribution(),
        barColor(),
        matchBg(),
        mobileWidth()
}


//add onclick-function for specific id´s
function onclickDistribution() {
    let option = document.getElementsByClassName('option');
    for (let i = 0; i < option.length; i++) {
        option[i].parentNode.setAttribute('onclick', `choice("answer${i + 1}")`)
    }
}


// the startscrenn ( o_o)
function startScreen() {
    let body = document.getElementById('body-replacement');
    body.style.zIndex="auto"
    body.innerHTML = /*html*/`<div id="background">
    <img onclick="generateQuestionCard('js')" class="category" id="js" src="style/img/jsImg.png">
    <img onclick="generateQuestionCard('css')" class="category" id="css" src="style/img/cssImg.png">
    <img onclick="generateQuestionCard('html')" class="category" id="html" src="style/img/htmlImg.png">
  </div>`
}


//behavior of progress-bar
function increaseProgress() {
    let counter = currentQuestion + 1;
    let percent = counter / questionVar.length;
    let bar = document.getElementById("progress-bar");
    let text = document.getElementById('percent');
    percent = percent * 100
    bar.style = `width: ${percent}%`
    text.innerHTML = `${percent.toFixed(0)} %`
    if (percent >= 50) {
        if (questionVar !== jsQuestion) {
            text.style.color = "white"
        }
    }
}


//changes bar-color for each topic
function barColor() {
    let bar = document.getElementById("progress-bar");
    if (questionVar == jsQuestion) {
        bar.classList.add('bg-warning')
    } else if (questionVar == htmlQuestion) {
        bar.classList.add('bg-danger')
    }
};


//changes background for each topic
function matchBg() {
    let body = document.getElementById('body-replacement')
    if (questionVar == htmlQuestion) {
        body.classList.add('html-background')
    } else if (questionVar == cssQuestion) {
        body.classList.add('css-background')
    } else if (questionVar == jsQuestion) {
        body.classList.add('js-background')
    }
}


//preparing the fireworks
function winBg(){
    let body = document.getElementById(`body-replacement`);
    body.classList.remove('html-background');
    body.classList.remove('css-background');
    body.classList.remove('js-background');
    body.classList.add('winscreen-body')
}


//hides the navbar for better mobile-experience
function mobileWidth(){
    let screenWidth = window.innerWidth;
    let body = document.getElementById(`body-replacement`);
    if(screenWidth<474){
        body.style.zIndex="5";
    }
}


function lastQuestionBtn(){
    let btn = document.getElementById(`next`)
    if(currentQuestion===9){
        btn.innerText="Auswertung"
    }
}