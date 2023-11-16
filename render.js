function init() {
  startScreen()
}

function generateBlankCard() {
  return document.getElementById('body-replacement').innerHTML =/*html*/`
        <div id="main-card-container" class="card-container">
            <div id ="card-container"class="card" style="width: 18rem;">
                <img class="card-img-top" src="style/img/maze-1560761_640.png" alt="Card image cap">
                <div class="progress">
                  <div id="percent">0%</div>
                  <div class="progress-bar progress-bar-striped progress-bar-animated" 
                  id="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="card-body">
                  <div class="card-head" id="question">Frage</div>
                    <div class="card">
                        <div class="card-body option" id="answer1">
                          This is some text within a card body.
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body option" id="answer2">
                          This is some text within a card body.
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body option" id="answer3">
                          This is some text within a card body.
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body option" id="answer4">
                          This is some text within a card body.
                        </div>
                      </div>
                </div>
                <div class="card-footer">
                  <div class="question-line">
                    <div id="question-number"></div>
                    &nbsp von &nbsp
                    <div id="question-length"></div>
                    Fragen
                    
                  </div>
                  <button class="btn btn-primary" id="next" disabled onclick="nextQuestion()">Nächste Frage</button>
                </div>
              </div>
        </div>
    `
};


function winScreen(imgName){
  let body=document.getElementById(`body-replacement`);
  return body.innerHTML=/*html*/`
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="firework"></div>
      <div class="card" style="width: 18rem;">
          <img id="win-img" class="${imgName}-win" src="style/img/${imgName}.png" class="card-img-top">
          <div class="card-body">
              <h5 class="card-title win-text">Geschafft!!</h5>
              <p class="card-text win-text">Du hast <span><b>${counter}</b></span> von <span><b>${questionVar.length}</b></span> Fragen richtig beantwortet!</p>
             <div id="btn-container">
                  <button onclick="init()" class="btn btn-secondary">Startseite</button>
                  <button id="restart" onclick="generateQuestionCard('${imgName}')" class="btn btn-secondary">Neustart</button>
             </div>
          </div>
      </div>
      <img class="trophy" id="trophy-right" src="style/img/trophyR.png" alt="trophy">
      <img class="trophy" id="trophy-left" src="style/img/trophyL.png" alt="trophy">
      <img id="trophy" src="style/img/trophy.png" alt="trophy">
  `,
  winBg()
}
