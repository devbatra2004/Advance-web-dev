
let birthData = {};    
let people = 50;

for (let m = 1; m <= 12; m++) {
    birthData[m] = [];
}

for (let i = 1; i <= people; i++) {
    let month = Math.floor(Math.random() * 12) + 1; 
    let year = Math.random() < 0.5 ? 1992 : 1993;  

    birthData[month].push({ id: i, year: year });
}

console.log("Birth Month Groupings:\n");

for (let month in birthData) {
    if (birthData[month].length > 0) {
        console.log(`Month ${month}:`, birthData[month]);
    }
}