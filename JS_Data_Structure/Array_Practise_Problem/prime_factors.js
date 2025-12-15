
let n = 315;  
let primeFactors = [];

console.log("Number:", n);

while (n % 2 === 0) {
    primeFactors.push(2);
    n = n / 2;
}

for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
        primeFactors.push(i);
        n = n / i;
    }
}

if (n > 2) {
    primeFactors.push(n);
}

console.log("Prime Factors:", primeFactors);