let wins = 0;
let ties = 0;
let losses = 0;

// Array of options for computer to pick from
const options = ["R", "P", "S"];

const playGame = function (wasPlayed) {
  let userChoice;

  wasPlayed
    ? (userChoice = prompt("Let's play again! \nChoose between R, P or S!"))
    : (userChoice = prompt("Enter R, P, or S:"));
  userChoice = userChoice.toUpperCase();
  if (!options.includes(userChoice.toUpperCase())) {
    alert("Choose between R, P or S!");
    playGame(0);
  } else {
    var botChose = options[Math.floor(Math.random() * options.length)];
    alert(`The computer chose ${botChose}!`);

    //checking
    switch (userChoice) {
      case "R": {
        switch (botChose) {
          case "R": {
            alert("It's a tie");
            ties++;
            break;
          }
          case "P": {
            alert("The computer won!");
            losses++;
            break;
          }
          case "S": {
            alert("You won!");
            wins++;
            break;
          }
        }
        break;
      }
      case "P": {
        switch (botChose) {
          case "R": {
            alert("You won!");
            wins++;
            break;
          }
          case "P": {
            alert("It's a tie!");
            ties++;
            break;
          }
          case "S": {
            alert("The computer won!");
            losses++;
            break;
          }
        }
        break;
      }
      case "S": {
        switch (botChose) {
          case "R": {
            alert("The computer won!");
            losses++;
            break;
          }
          case "P": {
            alert("You won!");
            wins++;
            break;
          }
          case "S": {
            alert("It's a tie");
            ties++;
            break;
          }
        }
        break;
      }
    }
    //Showing stats
    alert(`Stats:\nwins: ${wins}\nties: ${ties}\nlosses: ${losses}`);
    if (confirm("Want to play again?")) playGame(1);
    else if (losses > wins) alert("Got scared?lol");
  }
};

// Run the game for the first time
playGame(0);
