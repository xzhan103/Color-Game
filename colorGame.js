var colors= [];
var numbSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");


init();

function init(){
	//mode buttons event listeners
	setupModeBtn();
	setupSquares();
	reset();
}

function setupModeBtn(){
	for (var i = 0; i < modeBtn.length; i++){
	modeBtn[i].addEventListener("click", function(){
	modeBtn[0].classList.remove("selected");
	modeBtn[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent ==="Easy" ? numbSquares=3: numbSquares=6;
	reset();
	});
	}	
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numbSquares = 3;
// 	colors = generateRandomColors(numbSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numbSquares = 6;
// 	colors = generateRandomColors(numbSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
		
// 	}
// });

function reset(){
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){//add initial color to squares
			squares[i].style.display="block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to macth given color
		squares[i].style.background = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
		//get random color and push into arr
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green
	var g = Math.floor(Math.random() * 256);
	//pick blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}