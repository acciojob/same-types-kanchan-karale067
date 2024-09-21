function isSameType(value1, value2) {
    // Check if both values are NaN
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    
    // Check if the types of both values are the same
    return typeof value1 === typeof value2;
}

// Test examples
console.log(isSameType(1, 3));         // true (both are numbers)
console.log(isSameType("hey", "hello"));// true (both are strings)
console.log(isSameType(NaN, NaN));      // true (both are NaN)
console.log(isSameType("3", 3));        // false (one is a string, one is a number)


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
