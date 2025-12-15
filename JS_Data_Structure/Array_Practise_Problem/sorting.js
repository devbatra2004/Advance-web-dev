
let arr = [];
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100; // 100–999
    arr.push(num);
}

console.log("Generated Numbers:", arr);

arr.sort((a, b) => a - b);

console.log("Sorted Array:", arr);

let secondSmallest = arr[1];

let secondLargest = arr[arr.length - 2];

console.log("Second Smallest (sorted):", secondSmallest);
console.log("Second Largest (sorted):", secondLargest);