class Cell{
  constructor(paramsObject){
    this.content = paramsObject.content;
    this.index = paramsObject.index;
    this.complete = false;
    this.guess = "";
  }

  markComplete(){
    this.complete = true;
  }

  recordGuess(name){
    this.guess = name;
  }
}
