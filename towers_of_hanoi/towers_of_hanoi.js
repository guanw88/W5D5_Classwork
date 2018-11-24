const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  //Until the tower is moved to the other side
    //get move from player
      //check if move is valid
    //make the move
    //check if game complete

    constructor() {
      this.towers = [[1, 2, 3], [], []];
    }

    won() {
      return (this.towers === [[], [], [1, 2, 3]]);
    }

    play() {
      while (!this.won()) {
        this.promptMove();
      }
    }

    isValidMoves(startTowerIdx, endTowerIdx) {
      return ((startTowerIdx >= 0) && (startTowerIdx <= 2) && (endTowerIdx >= 0) && (endTowerIdx <= 2));
    }

    isDiscPresent(startTowerIdx) {
      return (this.towers[startTowerIdx].length != 0);
    }

    isDiscSizeValid(startTowerIdx, endTowerIdx) {
      let start_disc = this.towers[startTowerIdx].first;
      let end_disc = this.towers[endTowerIdx].first;
      if ((start_disc !== undefined) && (end_disc === undefined || end_disc > start_disc)) {
        return true;
      } else {
        return false;
      }
    }

    isValidMove(startTowerIdx, endTowerIdx) {
      return ((this.isValidMoves(startTowerIdx, endTowerIdx)) && (this.isDiscPresent(startTowerIdx)) && (this.isDiscSizeValid(startTowerIdx, endTowerIdx)));
    }

    //this does not work because the while loop never allows the reader.question to actually run

    // need to use recursive calls to promptMove instead

    // promptMove() {
    //   console.log(this.towers);
    //
    //   let validMoveGiven = false;
    //
    //   let startTowerIdx;
    //   let endTowerIdx;
    //   while (!validMoveGiven) {
    //     reader.question("Choose the tower to move from", function(res) {
    //       startTowerIdx = parseInt(res);
    //     });
    //     reader.question("Choose the tower to move to", function(res) {
    //       endTowerIdx = parseInt(res);
    //     });
    //     if (this.isValidMove(startTowerIdx,endTowerIdx)) {
    //       validMoveGiven = true;
    //       this.makeMove(startTowerIdx, endTowerIdx);
    //     }
    //   }
    // }

    makeMove(startTowerIdx, endTowerIdx) {
      let disc = this.towers[startTowerIdx].shift();
      this.towers[endTowerIdx].unshift(disc);
    }
}

const game1 = new Game();
game1.play();
