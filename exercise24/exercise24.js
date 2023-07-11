// Equality and inequality with strings
console.log("Is 'apple' == 'apple'? I predict True.");
console.log('apple' == 'apple'); // True
console.log("Is 'apple' != 'banana'? I predict True.");
console.log('apple' != 'kiwi'); // True
console.log("Is 'apple' == 'Apple'? I predict False.");
console.log('apple' == 'Apple'); // False (case-sensitive comparison)
// Tests using the lowercase function
console.log("Is 'HELLO' lowercase == 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() == 'hello'); // True
console.log("Is 'WORLD' lowercase == 'world'? I predict True.");
console.log('WORLD'.toLowerCase() == 'world'); // True
// Numerical tests
console.log("Is 10 > 5? I predict True.");
console.log(10 > 5); // True
console.log("Is 7 < 3? I predict False.");
console.log(7 < 3); // False
console.log("Is 5 >= 5? I predict True.");
console.log(5 >= 5); // True
console.log("Is 3 <= 1? I predict False.");
console.log(3 <= 1); // False
// Tests using "and" and "or" operators
console.log("Is (10 > 5) and (7 < 3)? I predict False.");
console.log((10 > 5) && (7 < 3)); // False (both conditions must be true)
console.log("Is (5 >= 5) or (3 <= 1)? I predict True.");
console.log((5 >= 5) || (3 <= 1)); // True (at least one condition must be true)
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana')); // True
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape')); // False
// Test whether an item is not in an array
console.log("Is 'kiwi' not in the fruits array? I predict True.");
console.log(!fruits.includes('kiwi')); // True
console.log("Is 'apple' not in the fruits array? I predict False.");
console.log(!fruits.includes('apple')); // False
