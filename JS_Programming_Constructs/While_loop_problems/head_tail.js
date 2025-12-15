//Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";

    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${flip} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

if (headsCount === 11) {
    console.log("Heads wins!");
} else {
    console.log("Tails wins!");
}