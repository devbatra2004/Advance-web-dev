
let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);
let result;

switch (choice) {
    case 1: 
        result = value * 12;
        console.log(`${value} Feet = ${result} Inches`);
        break;
    case 2:
        result = value * 0.3048;
        console.log(`${value} Feet = ${result.toFixed(4)} Meters`);
        break;
    case 3:
        result = value / 12;
        console.log(`${value} Inches = ${result.toFixed(4)} Feet`);
        break;
    case 4: 
        result = value / 0.3048;
        console.log(`${value} Meters = ${result.toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter 1, 2, 3, or 4.");
}