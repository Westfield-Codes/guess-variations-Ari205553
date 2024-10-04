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