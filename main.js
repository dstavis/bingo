
const sampleData = []

function createSampleData(howMany){
  for(var i = 0;i<howMany;i++){
      sampleData.push(generateString(49))
  }
}


function displayBoxes(numberOfRows){
  var tableBody = document.querySelector("#box-holder tbody")
  var dataCounter = 0;

  for(var i = 0; i < numberOfRows; i++){
      var row = document.createElement("tr")

      for(var j = 0; j < numberOfRows; j++){
        var box = document.createElement("td")
        box.classList.add("bingo-box")
        box.innerText = sampleData[dataCounter]
        dataCounter++
        row.append(box)
      }
      tableBody.append(row)
  }
}

createSampleData(31)

displayBoxes(4)
