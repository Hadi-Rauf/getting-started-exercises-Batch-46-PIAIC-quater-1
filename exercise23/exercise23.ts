let car = 'subaru';

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False (strict equality check, case-sensitive)

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False (not equal)

console.log("Is car.startsWith('hon')? I predict False.");
console.log(car.startsWith('hon')); // False (car starts with 'sub')

console.log("Is car.includes('ford')? I predict False.");
console.log(car.includes('ford')); // False (car does not include 'ford')

console.log("Is car.endsWith('aru')? I predict True.");
console.log(car.endsWith('aru')); // True (car ends with 'aru')

console.log("Is car.length <= 10? I predict True.");
console.log(car.length <= 10); // True (car length is less than or equal to 10)

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda'); // True (not equal)

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car.length > 5? I predict True.");
console.log(car.length > 5); // True (car length is 6)