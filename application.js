$(document).ready(function() {

  Game.prototype.populateDom = function() {
    for (var i = 0; i < 16; i++) {
      $("#"+String(i)).html(this.currentBoard[i])
    }
  }

  g = new Game;
  g.populateDom();

  $(document).on('keyup',function(e){
    if(e.which==38) {
      console.log("up");
    };
    if(e.which==39) {
      console.log("right");
    };
    if(e.which==40) {
      console.log("down");
    };
    if(e.which==37) {
      console.log("left");
    };
  });

  function Game() {
    this.startingBoard = boardGenerator();
    this.lastBoard = this.startingBoard;
    this.currentBoard = this.startingBoard;
  }

  function boardGenerator() {
    result = [];
    var idx1 = Math.floor(Math.random() * 16);
    var idx2 = Math.floor(Math.random() * 16);
    for(var i = 0; i < 16; i ++) {
      if (i == idx1 || i == idx2) { result.push(2); }
      else { result.push(0); }
    }
    return result;
  }
});