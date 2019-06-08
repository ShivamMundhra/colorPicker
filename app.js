/*var colors = [
  "rgb(200, 22, 0)",
  "rgb(20, 220, 0)",
  "rgb(200, 120, 0)",
  "rgb(100, 220, 50)",
  "rgb(200, 20, 100)",
  "rgb(20, 220, 90)"
];*/
var colors = [];

var numSquares;

function init() {
  setUpButtons();
  setUpSquares();
  var pickedColor = colors[Math.floor(Math.random() * 6)];
  document.querySelector("#ques").textContent = pickedColor;
}

function setUpButtons() {
  //refresh Button
  document.querySelector(".refresh").addEventListener("click", reset);
  setUpModeButtons();
}

function setUpModeButtons() {
  var modeButtons = document.querySelectorAll(".mode");
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? (numSquares = 3) : (numSquares = 6);
    });
  }
}

function reset() {
  colors = generateRandomColor();
}

function generateRandomColor(num) {
  var arr = [];
  var color;
  for (var i = 0; i < num; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    color = "rgb(" + red + ", " + blue + ", " + green + ")";
    arr.push(color);
    console.log(arr[i]);
  }
  return arr;
}

function changeColors(squares, color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function setUpSquares() {
  //Generate random color
  colors = generateRandomColor(numSquares);

  //Pick a random color and display it on ques

  //assgn random color to the squares
  var squares = document.querySelectorAll(".square");
  for (var i = 0; i < squares.length; i++) {
    //Assign the colors
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }

    //Add event listners
    squares[i].addEventListener("click", function() {
      if (this.style.backgroundColor === pickedColor) {
        document.querySelector("#message").textContent = "Correct";
        document.querySelector(".refresh").textContent = "PLAY AGAIN";
        document.querySelector(".header").style.backgroundColor = pickedColor;
        changeColors(squares, pickedColor);
      } else {
        document.querySelector("#message").textContent = "Correct";
      }
    });
  }
}

init();
