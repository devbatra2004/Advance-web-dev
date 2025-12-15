
function isPalindrome(number) {
    let original = number.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}

let num1 = 121;
let num2 = 1331;

console.log(`${num1} is${isPalindrome(num1) ? "" : " not"} a palindrome.`);
console.log(`${num2} is${isPalindrome(num2) ? "" : " not"} a palindrome.`);