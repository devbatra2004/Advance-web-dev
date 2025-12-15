let start = parseInt(prompt("Enter the starting number:"));
let end = parseInt(prompt("Enter the ending number:"));
function isPrime(number) {
    if (number <= 1) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(`Prime numbers between ${start} and ${end} are:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}