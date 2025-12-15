

let pinCode = "400088";

let pinRegex = /^[1-9][0-9]{5}$/;

if (pinRegex.test(pinCode)) {
    console.log(pinCode, "is a valid PIN code ");
} else {
    console.log(pinCode, "is NOT a valid PIN code ");
}
