let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let prompt = document.getElementById("prompt");
let header = document.getElementById("header");
const resetButton = document.getElementById("resetButton");
const EASY_HARD_BTN = document.getElementById("easyHardBtn");
let bottomSquares = document.querySelectorAll(".bottom-square");
let isHard = true;
let isEasy = false;

EASY_HARD_BTN.addEventListener("click", function() {
    
    if (isHard === true) {
        isHard = false;
        isEasy = true;
        console.log("now the difficulty is easy")
    } else if (isEasy === true) {
        isHard = true;
        isEasy = false;
        console.log("now the difficulty is hard")
    }

    if (isEasy) {
        colors = generateRandomColors(3);
        
        for (let i = 0; i < 3 ; i++) {
            bottomSquares[i].style.backgroundColor = "#232323";
        }
    } else if (isHard) {
        colors = generateRandomColors(6);
    }

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    
    console.log(squares);
    console.log(colors);

    for (let i = 0 ; i< colors.length; i++ ) {
        squares[i].style.backgroundColor = colors[i];
        
    }
    
    resetButton.textContent = "New Colors";
    prompt.textContent = "Guess the right color!";
});

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
    if (isEasy) {
        colors = generateRandomColors(3);
        
        for (let i = 0; i < 3 ; i++) {
            bottomSquares[i].style.backgroundColor = "#232323";
        }
    } else if (isHard) {
        colors = generateRandomColors(6);
    }

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    for (let i = 0 ; i< squares.length; i++ ) {
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New Colors";
    prompt.textContent = "Guess the right color!";
})

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        
        console.log(clickedColor,pickedColor);

        if (clickedColor === pickedColor) {
            prompt.textContent = "Correct!";
            changeColors(clickedColor);
            header.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again";
        } else {
            prompt.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });

}

function changeColors(color) {
    for(let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for(let i = 0; i < num ; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}