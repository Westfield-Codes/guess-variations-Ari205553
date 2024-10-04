function rollDice(){ 
    // create a variable called roll, set it equal to random 1-6
    let roll = Math.floor(Math.random()*6)+1;
   // if roll equals 6, display "6! You won in [turns] turns."
  if (roll == "6") alert("6! You won in" + turns);
    // otherwise:
  else {
    // use a confirm and say: "You rolled a [roll]"
  confirm("You rolled a " + roll);
    // then call rollDice again.
  rollDice();
    // close the else block
  }
  // close the function block
  }
    /* Simple Guess Program */
// create variable called guess, set to 0
var guess = ("0");
// create variable called answer and store a random integer 1-100
var answer = Math.floor(Math.random()*100)+1;
// display the answer for testing purposes only
alert(answer);
// set guess equal to prompt asking user to "Guess a number, 1-100"
guess = prompt("Guess a number, 1-100");
// if guess equals answer display "Correct!" 
if (guess == answer) alert("correct");
// or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("To High!");
// or display "Too low!" 
else alert("To Low");

/* Simple Guess Program */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
var answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
  alert(answer);
  // create guess and set equal to 0 
var guess = 0;
  // loop while guess is not equal to answer
while (guess != answer){
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Guess a number 1-100");
    // if guess equals answer display "Correct!" 
if ( guess == answer) alert("correct");
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too HiGH");
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("too low");
    // else say "Bad input"
else alert("Bad input");
  // end the loop
}
// end the function
 }

/* Simple Guess Program */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
  var answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // create guess and set equal to 0 
var guess = 0;
  // loop while guess is not equal to answer or to "q"
    while (guess != answer || "q"){
    // set guess equal to asking user to "Guess a number, 1-100"
     guess = prompt("Guess a number, 1-100");
    // if guess equals "q" display "Quitter!"
    if (guess == "q") alert("Quitter!");
    // or if guess equals answer display "Correct!" 
     else if (guess == answer) alert("correct");
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("TOO HIGH");
    // or if guess is less than answer display "Too low!" 
     else if (guess < answer) alsert("TOO LOW") ;
    // or say "Bad input"
    else alert("Bad input");
  // end the loop
    }
// end the function
  /* Simple Guess Program */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
  var answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // create guess and set equal to 0 
var guess = 0;
  // loop while guess is not equal to answer or to "q"
    while (guess != answer || "q"){
    // set guess equal to asking user to "Guess a number, 1-100"
     guess = prompt("Guess a number, 1-100");
    // if guess equals "q" display "Quitter!"
    if (guess == "q") alert("Quitter!");
    // or if guess equals answer display "Correct!" 
     else if (guess == answer) alert("correct");
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("TOO HIGH");
    // or if guess is less than answer display "Too low!" 
     else if (guess < answer) alsert("TOO LOW") ;
    // or say "Bad input"
    else alert("Bad input");
  // end the loop
    }
// end the function
}
 

/* Guess Game Program by [Ari]
 * Adds the ability to play again. 
 */

/* newGame is an outer loop giving the user an option 
 * to play again, using a boolean variable called again.
 */

// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
var again = true;
  // loop as long as again is true 
  while (again == true){
    // run the guessGame function 
    function guessgame(){
    // ask to play again with again set to a confirm
      again = confirm("play again");
    // close the loop
    }
  // thank the player for playing
alert("thank you for playing");
  // close the function
  }

  
// create a function called guessGame 
function guessGame(){}
  // create guess and set equal to 0 
 var guess = 0;
  // create tries and set equal to 0 
var tries = 0;
  // create variable answer and generate a random integer 1-100
  var answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // loop while guess is not equal to answer
while (guess != answer){
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("guess a number, 1-100");
    // add one to tries
tries++;
    // if guess equals answer display "Correct in [tries] tries!" 
if (guess == answer) alert("correct in" + tries + "tries");
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
else alert ("Bad input!");
    // end the loop
}
  // end the function
}



/* Guess Game Program */

// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
var again = true;
  // run the guessGame function
guessGame();
  // loop as long as again is true 
while (again == true){
    // ask to play again with again set to a confirm
again = confirm("play again");
    // if again is true run the guessGame function
if (again == true) guessGame();
    // close the loop
}
  // thank the player for playing
alert("thank you for playing");
  // close the function
}

// create a function called guessGame
function guessGame(){
  // create guess and set equal to 0 
var guess = 0;
  // create tries and set equal to 0 
var tries = 0;
  // create variable answer and generate a random integer 1-100
var answer =  Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // loop while guess is not equal to answer
while (guess != answer){
    // set guess equal to asking user to "Guess a number, 1-100"
guess = prompt("Guess a number 1-100");
    // add one to tries
tries++;
    // if guess equals answer display "Correct in [tries] tries!" 
if (guess == answer) alert("correct in " + tries + " tries");
    // or if guess is "q" break the loop
else if (guess =="q") break;
    // or if guess is greater than answer display "Too high!" 
else if (guess > answer) alert("To High!");
    // or if guess is less than answer display "Too low!" 
else if (guess < answer) alert("To Low");
    // if it's none of those, say "Bad Input!"
else alert("Bad input");
    // end the loop
}
  // end the function
}