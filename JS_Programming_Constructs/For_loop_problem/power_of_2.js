let n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a non-negative integer for n.");
    process.exit(1);
}

console.log(`Powers of 2 from 2^0 to 2^${n}:`);

for (let i = 0; i <= n; i++) {
    let power = Math.pow(2, i);
    console.log(`2^${i} = ${power}`);
}