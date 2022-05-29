var answerPropName = 'Tell us one short fun fact about yourself!'
'Tell us one short fun fact about yourself!'

function getRandomUniqueData(array){
  // get a random number between 0 and surveyResponses.length
  var randomIndex = Math.floor(Math.random() * array.length)
  // pull the answer with that index out of the array and delete it from the array
  return array.splice(randomIndex, 1)[0][answerPropName]
  // return the answer we pulled out
}

const numberOfRows = 4;
var currentCard = undefined;

function createNewUser(username){
  var newCard = new Card(username, numberOfRows)

  currentCard = newCard;
}

function displayBoxes(numberOfRows){
  var tableBody = document.querySelector("#box-holder tbody")

  for(var i = 0; i < numberOfRows; i++){
      var row = document.createElement("tr")

      for(var j = 0; j < numberOfRows; j++){
        var box = document.createElement("td")
        box.classList.add("bingo-box")

        var div = document.createElement("div")
        var span = document.createElement("span")

        div.append(span)

        box.append(div)

        row.append(box)
      }
      tableBody.append(row)
  }
}

function updateBoxContents(card){
  var cells = document.querySelectorAll(".bingo-box span")

  for(var i = 0; i < cells.length; i++){
    cells[i].innerText = card.cells[i].content
  }
}

function start(){
  createNewUser("Test Testerson")
  displayBoxes(numberOfRows)
  updateBoxContents(currentCard)
}

start()


// Goal: Display some user input (i.e. user's name shows up over the card)
// Goal: let a user mark a cell complete/incomplete and display it differently accordingly
// Goal: some CYOA, i.e. localStorage
// login feature would count as CYOA

// 1. A unique user name owns a unique card object
// 2. the user name submission should enforce that it is a first name and a last name, and that it is capitalized properly
// 3. the form should inform the user of what format it expects them to enter their name in
// 4. a card object knows which data it has and what order that data is in (it should be a random order unique to each card, but it is not necessary to enforce uniqueness)
// 5. eventually a card object will know which cells have been "solved"
// 6. eventually the app will notice if the card has boxes solved that happen to form a bingo victory condition (i.e. 4 diagonally, 4 across, 4 in a column)
// 7. a card object knows which username it belongs to
// 8. when a user submits a name that we haven't seen before, we generate a fresh card just for them. we make sure that card knows it belongs to them so that the next time they provide the same name they can get the same card
// 9. when provided the user's name, the application retrieves the card that was assigned to that name, and it's the same card (with the same contents in the same order) each time
