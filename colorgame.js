var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons eventListeners
	for(var i = 0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
 }
 //

 for (var i = 0; i< squares.length; i++){
	//add initial colors for squares


	//add click lisrterners to squares
	squares[i].addEventListener("click",function() {
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again!"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
			this.style.background = " #232323";
			messageDisplay.textContent = "Try again";
		}	
	});
}

reset();
	
}



function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickcolor(); 
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent ="New Colors";
	messageDisplay.textContent ="";
	//change colors of squares
	for(var i =0; i < squares.length ;i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	    }
	    else{
	    	squares[i].style.display = "none";
	    }
	}
	h1.style.background = "steelblue";

}

/*
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i< squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}
});
*/

resetButton.addEventListener("click",function(){

	 reset(); 
})

colorDisplay.textContent = pickedColor;



function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]; 
}

function generateRandomColors(num){
	var arr =[]
	for(var i =0; i< num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g +", " + b +")";
}
