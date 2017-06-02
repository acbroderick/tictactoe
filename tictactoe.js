var nextPlayer = true;

var boardState = [
                  [null, null, null],
                  [null, null, null],
                  [null, null, null]
                 ]

var btn = document.createElement("button");
btn.innerHTML = 'Play Again';
btn.addEventListener('click', function() {
  location.reload();
});


function play(box) {
  if (boardState[box.getAttribute('row')][box.getAttribute('column')] === null) {
    if (nextPlayer === true) {
      boardState[box.getAttribute('row')][box.getAttribute('column')] = 'X';
      document.getElementById('who').innerHTML = "O's Turn: ";
    } else {
      boardState[box.getAttribute('row')][box.getAttribute('column')] = 'O';
      document.getElementById('who').innerHTML = "X's Turn: ";
    }
  nextPlayer = !nextPlayer;
  } else {
    alert('Only one play per square!');
  }
  populateBoard(boardState);
  winner(boardState);
  tie(boardState);
}

function populateBoard(boardState) {
  tdArr = document.getElementsByTagName('td');
  for (var i = 0; i < tdArr.length; i++) {
    var k = tdArr[i].getAttribute('row')
    var j = tdArr[i].getAttribute('column')
    tdArr[i].innerHTML = boardState[k][j];
  }
}


function winner(boardState) {
  var someoneWon = false;
  for (var i = 0; i < boardState.length; i++) {
    for (var j = 0; j < boardState[i].length; j++) {
      if (boardState[i][0] !== null && boardState[i][0] === boardState[i][1] && boardState [i][1] === boardState[i][2]) {
          document.getElementById('win').innerHTML = boardState[i][0] + ' is the Winner!';
          document.getElementById('reset').appendChild(btn);
          someoneWon = true;
      } else if (boardState[0][j]  !== null && boardState[0][j] === boardState[1][j] && boardState[1][j] ===boardState[2][j]) {
          document.getElementById('win').innerHTML = boardState[0][j] + ' is the Winner!';
          document.getElementById('reset').appendChild(btn);
          someoneWon = true;
      } else if (boardState[0][0] !== null && boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) {
          document.getElementById('win').innerHTML = boardState[0][0] + ' is the Winner!';
          document.getElementById('reset').appendChild(btn);
          someoneWon = true;
      } else if (boardState[0][2] !== null && boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0]) {
          document.getElementById('win').innerHTML = boardState[0][2] + ' is the Winner!';
          document.getElementById('reset').appendChild(btn);
          someoneWon = true;
      }
    }
  }
  return someoneWon;
}

function tie(boardState) {
  if(!winner(boardState)) {
    var noWinner = true;
      for (var i = 0; i < boardState.length; i++) {
        for (var j = 0; j < boardState[i].length; j++) {
          if (boardState[i][j] === null) {
            noWinner = false;
          }
        }
      }
  }
  if (noWinner) {
    document.getElementById('win').innerHTML = 'It is a Tie!';
    document.getElementById('reset').appendChild(btn);
  }
}

