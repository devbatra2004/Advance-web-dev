let choice = prompt(
  "Enter your conversion choice:\n1: Celsius to Fahrenheit\n2: Fahrenheit to Celsius"
);

switch (choice) {
    case "1":
        let celsius = parseFloat(prompt("Enter temperature in Celsius (0 to 100 °C):"));
        if (celsius >= 0 && celsius <= 100) {
            let degF = (celsius * 9/5) + 32;
            console.log(`${celsius}°C = ${degF.toFixed(2)}°F`);
        } else {
            console.log("Temperature out of range. Must be between 0°C and 100°C.");
        }
        break;

    case "2":
        let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit (32 to 212 °F):"));
        if (fahrenheit >= 32 && fahrenheit <= 212) {
            let degC = (fahrenheit - 32) * 5/9;
            console.log(`${fahrenheit}°F = ${degC.toFixed(2)}°C`);
        } else {
            console.log("Temperature out of range. Must be between 32°F and 212°F.");
        }
        break;

    default:
        console.log("Invalid choice. Enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius.");
}