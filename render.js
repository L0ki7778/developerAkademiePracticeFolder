function init() {
  startScreen()
}

function generateBlankCard() {
  return document.getElementById('body-replacement').innerHTML =/*html*/`
        <div class="card-container">
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
                  <button class="btn btn-primary" id="next" disabled onclick="nextQuestion()">nächste Frage</button>
                </div>
              </div>
        </div>
    `
}

