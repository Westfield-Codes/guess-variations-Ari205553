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
var answer and store (1-100);
// display the answer for testing purposes only

// set guess equal to prompt asking user to "Guess a number, 1-100"

// if guess equals answer display "Correct!" 

// or if guess is greater than answer display "Too high!" 

// or display "Too low!" 


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
