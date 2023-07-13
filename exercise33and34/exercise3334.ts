// Ordinal Numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  let ordinal: string;

  if (number === 1) {
    ordinal = "1st";
  } else if (number === 2) {
    ordinal = "2nd";
  } else if (number === 3) {
    ordinal = "3rd";
  } else {
    ordinal = number + "th";
  }

  console.log(ordinal);
}

// Pizzas
const pizzas: string[] = ["BBQ Chicken Pizza", "Four Cheese Pizza", "Beef Pizza"];

for (let j = 0; j < pizzas.length; j++) {
  const pizza = pizzas[j];
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");