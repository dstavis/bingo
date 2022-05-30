class Card{
  constructor(username, numberOfRows){
    this.username = username;
    this.cells = [];

    this.generateCells(numberOfRows * numberOfRows)
  }

  generateCells(numberOfCells){
    var surveyCopy = [...surveyResponses]
    for(var i = 0;i<numberOfCells;i++){
      this.cells.push(
        new Cell(
        {
          content: getRandomUniqueData(surveyCopy),
          index: i
        }
        )
      )
    }
  }

}
