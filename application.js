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
      g.eliminate_up();
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
    if (g.currentBoard.includes(0) && !g.currentBoard.compare(g.lastBoard)) {
      g.spawnBlock();
      g.populateDom();
      for (var i = 0; i < 16; i++) {
        g.lastBoard[i] = g.currentBoard[i];
      };
    };
  });

  function Game() {
    this.startingBoard = boardGenerator();
    this.lastBoard = []
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

  Game.prototype.spawnBlock = function() {
    board = this.currentBoard;
    var idx = null;
    var newBoard = [];
    while (idx == null) {
      idx = Math.floor(Math.random() * 16);
      if (board[idx] != 0){ idx = null};
    }
    for (var i=0; i < 16; i++) {
      if (i == idx)  { newBoard.push(2); }
      else { newBoard.push(board[i]);}
    }
    this.currentBoard = newBoard;
  }

  Game.prototype.eliminate_up = function() {
    this.clearUp();
    this.clearUp();
    this.clearUp();
    this.moveUp();
  }

  Game.prototype.clearUp = function() {
    for (var i = 0; i < 16; i++) {
      if ((i/4 < 3) && (this.currentBoard[i] == 0) && (this.currentBoard[i+4] != 0)) {
        this.currentBoard.splice(i, 1, this.currentBoard[i+4])
        this.currentBoard.splice((i+4), 1, 0)
      }
    }
  }

  Game.prototype.moveUp = function() {
    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        if ((j % 4 == i % 4) && ((j/4)-(i/4) == -1) && this.currentBoard[i] == this.currentBoard[j]) {
          this.currentBoard.splice(j, 1, (this.currentBoard[j] * 2));
          this.currentBoard.splice(i, 1, 0);
        }
      }
    }
  }

  Array.prototype.compare = function(testArr) {
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
      if (this[i].compare) {
        if (!this[i].compare(testArr[i])) return false;
      }
      if (this[i] !== testArr[i]) return false;
    }
    return true;
  }
});