console.log('Connected!')

// var gameBoard = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
var gameBoard = document.getElementsByClassName('blank-box')

var playerOneX = 'http://clipart-library.com/data_images/49128.png'

var playerTwoO ='http://www.drodd.com/images14/o25.png'

var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var box5 = document.getElementById('box5')
var box6 = document.getElementById('box6')
var box7 = document.getElementById('box7')
var box8 = document.getElementById('box8')
var box9 = document.getElementById('box9')

var firstPlayer = true

for (var i=0; i < gameBoard.length; i++) {
  gameBoard[i].addEventListener('click', function () {
    if (firstPlayer) {
      this.style.backgroundImage = 'url(' + playerOneX + ')'
      this.setAttribute('blankbox', "ecks");
      firstPlayer = false;
      this.removeEventListener('click', arguments.callee);
    } else {
      this.style.backgroundImage = 'url(' + playerTwoO + ')'
      this.setAttribute('blankbox', "oh");
      firstPlayer = true;
      this.removeEventListener('click', arguments.callee);
    }
    winnerIs();
  })
}

function winnerIs () {
  // possibilities for player 1 (x) to win
  if ((gameBoard[0].getAttribute('blankbox') === "ecks") && (gameBoard[1].getAttribute('blankbox') === "ecks") && (gameBoard[2].getAttribute('blankbox') === "ecks")) {
    alert("X won the game!")
  }
  else if ((gameBoard[3].getAttribute('blankbox') === "ecks") && (gameBoard[4].getAttribute('blankbox') === "ecks") && (gameBoard[5].getAttribute('blankbox') === "ecks")) {
    alert("X won the game!")
} else if ((gameBoard[6].getAttribute('blankbox') === "ecks") && (gameBoard[7].getAttribute('blankbox') === "ecks") && (gameBoard[8].getAttribute('blankbox') === "ecks")) {
  alert("X won the game!")
} else if ((gameBoard[0].getAttribute('blankbox') === "ecks") && (gameBoard[3].getAttribute('blankbox') === "ecks") && (gameBoard[6].getAttribute('blankbox') === "ecks")) {
  alert("X won the game!")
} else if ((gameBoard[1].getAttribute('blankbox') === "ecks") && (gameBoard[4].getAttribute('blankbox') === "ecks") && (gameBoard[7].getAttribute('blankbox') === "ecks")) {
  alert("X won the game!")
} else if ((gameBoard[2].getAttribute('blankbox') === "ecks") && (gameBoard[5].getAttribute('blankbox') === "ecks") && (gameBoard[8].getAttribute('blankbox') === "ecks")) {
  alert("X won the game!")
} else if ((gameBoard[0].getAttribute('blankbox') === "ecks") && (gameBoard[4].getAttribute('blankbox') === "ecks") && (gameBoard[8].getAttribute('blankbox') === "ecks")) {
  alert("X won the game!")
} else if ((gameBoard[2].getAttribute('blankbox') === "ecks") && (gameBoard[4].getAttribute('blankbox') === "ecks") && (gameBoard[6].getAttribute('blankbox') === "ecks")) {
  alert("X won the game!")
}
  // possibilities for player 2 (o) to win
  if ((gameBoard[0].getAttribute('blankbox') === "oh") && (gameBoard[1].getAttribute('blankbox') === "oh") && (gameBoard[2].getAttribute('blankbox') === "oh")) {
    alert("O won the game!")
  }
  else if ((gameBoard[3].getAttribute('blankbox') === "oh") && (gameBoard[4].getAttribute('blankbox') === "oh") && (gameBoard[5].getAttribute('blankbox') === "oh")) {
    alert("O won the game!")
  } else if ((gameBoard[6].getAttribute('blankbox') === "oh") && (gameBoard[7].getAttribute('blankbox') === "oh") && (gameBoard[8].getAttribute('blankbox') === "oh")) {
  alert("O won the game!")
} else if ((gameBoard[0].getAttribute('blankbox') === "oh") && (gameBoard[3].getAttribute('blankbox') === "oh") && (gameBoard[6].getAttribute('blankbox') === "oh")) {
  alert("O won the game!")
} else if ((gameBoard[1].getAttribute('blankbox') === "oh") && (gameBoard[4].getAttribute('blankbox') === "oh") && (gameBoard[7].getAttribute('blankbox') === "oh")) {
  alert("O won the game!")
} else if ((gameBoard[2].getAttribute('blankbox') === "oh") && (gameBoard[5].getAttribute('blankbox') === "oh") && (gameBoard[8].getAttribute('blankbox') === "oh")) {
  alert("O won the game!")
} else if ((gameBoard[0].getAttribute('blankbox') === "oh") && (gameBoard[4].getAttribute('blankbox') === "oh") && (gameBoard[8].getAttribute('blankbox') === "oh")) {
  alert("O won the game!")
} else if ((gameBoard[2].getAttribute('blankbox') === "oh") && (gameBoard[4].getAttribute('blankbox') === "oh") && (gameBoard[6].getAttribute('blankbox') === "oh")) {
  alert("O won the game!")
}
}
