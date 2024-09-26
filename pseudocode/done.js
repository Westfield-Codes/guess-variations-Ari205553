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
