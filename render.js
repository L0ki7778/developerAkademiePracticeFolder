function renderQuestions(){
generateQuestionCard()
}

function generateQuestionCard(){
    return document.getElementById('body-replacement').innerHTML=/*html*/`
        <div id="background"><img id="bg-img" src="style/img/1700084588430fpq3uzf9.png"></div>
        <!-- <div class="card-container">
            <div id ="card-container"class="card" style="width: 18rem;">
                <img class="card-img-top" src="style/img/maze-1560761_640.png" alt="Card image cap">
                <div class="card-body">
                  <div class="card-head" id="question">Frage</div>
                    <div class="card">
                        <div class="card-body option" id="answer1" onclick="choice('answer1')">
                          This is some text within a card body.
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body option" id="answer2" onclick="choice('answer2')">
                          This is some text within a card body.
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body option" id="answer3" onclick="choice('answer3')">
                          This is some text within a card body.
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-body option" id="answer4" onclick="choice('answer4')">
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
        </div> -->
    `
}