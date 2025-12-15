let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
let c = parseFloat(process.argv[4]);


let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

console.log("Operation 1 (a + b * c):", op1);
console.log("Operation 2 (a % b + c):", op2);
console.log("Operation 3 (c + a / b):", op3);
console.log("Operation 4 (a * b + c):", op4);

// Assume op1 is max and min
let max = op1;
let min = op1;

// Check max
if (op2 > max) max = op2;
if (op3 > max) max = op3;
if (op4 > max) max = op4;

// Check min
if (op2 < min) min = op2;
if (op3 < min) min = op3;
if (op4 < min) min = op4;

console.log("Maximum value:", max);
console.log("Minimum value:", min);