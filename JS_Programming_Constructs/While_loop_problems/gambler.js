//Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made.

let stake = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (stake > 0 && stake < goal) {
    bets++;
    if (Math.random() < 0.5) {
        stake++; // Win Rs 1
        wins++;
    } else {
        stake--; // Lose Rs 1
    }
}

console.log(`Total bets made: ${bets}`);
console.log(`Number of times won: ${wins}`);
console.log(`Final stake: Rs ${stake}`);
if (stake === goal) {
    console.log("Congratulations! You reached your goal of Rs 200.");
} else {
    console.log("You went broke.");
}