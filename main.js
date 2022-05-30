// ************ SETTINGS ************

const numberOfRows = 4;
var currentCard = undefined;

// ************ end SETTINGS ************

// ************ QuerySelectors and Event Listeners ************
var userIDSection = document.querySelector('#user-ID')
var usernameSubmitButton = document.querySelector('#user-ID button')
var usernameTextInput = document.querySelector('input#username')
var stickerUsername = document.querySelector("#sticker-username")

usernameSubmitButton.addEventListener('click', usernameClickHandler)

function usernameClickHandler(eventObject){
  createNewUser(usernameTextInput.value)
  // TODO: hide input form
  userIDSection.classList.add("hidden")
  // TODO: put username in sticker
  stickerUsername.value = currentCard.username
}


// Next: Let the user switch which card from storage by inputting a username that's already stored?

// ************ end QuerySelectors and Event Listeners ************

// ************ VIEW ****************

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

function placeEventListeners(){
  var cells = document.querySelectorAll("td.bingo-box")
  for(var i = 0;i<cells.length;i++){
    cells[i].addEventListener("click", markBoxComplete)
  }

}

function markBoxComplete(eventObject){
  var cellIndex = eventObject.currentTarget.children[0].children[0].id
  currentCard.cells[cellIndex].complete = true;
  updateLocalStorageUser()
  updateBoxContents(currentCard)
}

function updateLocalStorageUser(){
  localStorage.setItem(currentCard.username, JSON.stringify(currentCard))
}

function updateBoxContents(card){
  var cells = document.querySelectorAll(".bingo-box span")

  for(var i = 0; i < cells.length; i++){
    cells[i].innerText = card.cells[i].content
    cells[i].id = card.cells[i].index
    if(card.cells[i].complete){
      cells[i].parentElement.parentElement.classList.add("complete")
    }
  }
}
// **************** end VIEW ****************

// **************** USER MANAGER ****************

function createNewUser(username){
  var newCard = new Card(username, numberOfRows)
  localStorage.setItem(username, JSON.stringify(newCard))
  updateLatestUser(username)
  currentCard = newCard;
  updateBoxContents(currentCard)
}

// function loadUser(username){
//   var userCard = JSON.parse(localStorage[username])
//   currentCard = userCard
//   updateBoxContents(currentCard)
//   updateLatestUser(username)
// }

function updateLatestUser(username){
  localStorage.setItem('latestUser', username)
}

function loadLatestUser(){
  var username = localStorage.getItem('latestUser')
  if(username){
    var userCard = JSON.parse(localStorage.getItem(username))
    currentCard = userCard
    updateBoxContents(currentCard)
    stickerUsername.value = currentCard.username
  } else { // no latestUser
    // display a submit button for the name tag
    userIDSection.classList.remove("hidden")
  }
}

// **************** end USER MANAGER ****************

// **************** APPLICATION MANAGER ****************
function start(){
  displayBoxes(numberOfRows)
  loadLatestUser()
  placeEventListeners()
}

start()

// **************** end APPLICATION MANAGER ****************
