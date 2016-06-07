/*
 * @Author: robin
 * @Date:   2016-05-31 12:52:49
 * @Last Modified by:   robin
 * @Last Modified time: 2016-05-31 13:35:44
 */
var userChoice = prompt("Do you choose rock,paper or scissors?");
var computerChoice = Math.random();
if (computerChoice >= 0 & computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice >= 0.34 & computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }

}
compare(userChoice, computerChoice);
