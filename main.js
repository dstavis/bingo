var answerPropName = 'Tell us one short fun fact about yourself!'
'Tell us one short fun fact about yourself!'

function getRandomUniqueData(array){
  // get a random number between 0 and surveyResponses.length
  var randomIndex = Math.floor(Math.random() * array.length)
  // pull the answer with that index out of the array and delete it from the array
  return array.splice(randomIndex, 1)[0][answerPropName]
  // return the answer we pulled out
}

function displayBoxes(numberOfRows, content){
  var tableBody = document.querySelector("#box-holder tbody")
  var dataCounter = 0;

  for(var i = 0; i < numberOfRows; i++){
      var row = document.createElement("tr")

      for(var j = 0; j < numberOfRows; j++){
        var box = document.createElement("td")
        box.classList.add("bingo-box")
        var div = document.createElement("div")
        var span = document.createElement("span")
        span.innerText = getRandomUniqueData(content)
        div.append(span)
        box.append(div)
        dataCounter++
        row.append(box)
      }
      tableBody.append(row)
  }
}


displayBoxes(4, surveyResponses)
