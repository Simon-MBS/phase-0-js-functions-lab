// Function 1: Calculate 10% tax
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: Convert text to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: Find the larger of two numbers
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// Function 4: Check if a word is a palindrome
function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
}

// Function 5: Calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };