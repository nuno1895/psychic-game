var letterArray = ["a", "b" ,"c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t", "u", "v", "w", "x", "y", "z" ];
var wins = 0;
var losses = 0;
var guesses = 8;
var letterSelected;
var usedLetters = "";

var key;

window.onload = function(){


	letterSelected = letterArray[Math.floor(Math.random()*letterArray.length)];
	console.log("letter selected:", letterSelected);		

	document.onkeyup = function(event){
		key = event.key;
		console.log("Key Pressed:", key);

		if (letterSelected === key) {
			wins ++;
			document.querySelector("#wins").innerHTML = wins;
			guesses = 8;
			document.querySelector("#gueses").innerHTML = guesses;
			usedLetters = "";
			console.log("wins:", wins);
			letterSelected = letterArray[Math.floor(Math.random()*letterArray.length)];
			console.log("letter selected2:", letterSelected);
		}else {
			usedLetters += key;
			document.querySelector("#letterGuesses").innerHTML = usedLetters;
			guesses --;	
			document.querySelector("#gueses").innerHTML = guesses;
			console.log("used Letter:", usedLetters);
			console.log("Guesses Left:", guesses);					
		};

		if (guesses <= 0) {
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			letterSelected = letterArray[Math.floor(Math.random()*letterArray.length)];
			guesses = 8;
			document.querySelector("#gueses").innerHTML = guesses;
			usedLetters = "";
			console.log("Guess reset", guesses)
			console.log("letter selected2:", letterSelected);
			console.log("Losses:" , losses);
		};	

	};



}