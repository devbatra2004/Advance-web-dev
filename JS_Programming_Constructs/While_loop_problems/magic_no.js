
alert("Think of a number between 1 and 100. I will try to guess it!");

let low = 1;
let high = 100;
let guess;
let response;

while (low <= high) {
    guess = Math.floor((low + high) / 2);
    response = prompt(`Is your number ${guess}? 
Type 'yes' if correct, 'less' if your number is smaller, 'greater' if your number is larger.`).toLowerCase();

    if (response === "yes") {
        console.log(`Hurray! Your magic number is ${guess}.`);
        break;
    } else if (response === "less") {
        high = guess - 1;
    } else if (response === "greater") {
        low = guess + 1;
    } else {
        alert("Please enter 'yes', 'less', or 'greater'.");
    }
}

if (low > high) {
    console.log("Hmm, seems like something went wrong. Are you sure you followed the rules?");
}