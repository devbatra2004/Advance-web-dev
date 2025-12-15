let dieCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

let reachedTen = false;

while (!reachedTen) {
    let roll = Math.floor(Math.random() * 6) + 1; 
    dieCount[roll]++;

    if (dieCount[roll] === 10) {
        reachedTen = true;
    }
}

console.log("Final Die Count:", dieCount);

let maxCount = 0;
let minCount = Infinity;
let maxNum = null;
let minNum = null;

for (let num in dieCount) {
    if (dieCount[num] > maxCount) {
        maxCount = dieCount[num];
        maxNum = num;
    }
    if (dieCount[num] < minCount) {
        minCount = dieCount[num];
        minNum = num;
    }
}

console.log("Number that reached 10 first:", maxNum);
console.log("Most frequent number:", maxNum, "→", maxCount, "times");
console.log("Least frequent number:", minNum, "→", minCount, "times");