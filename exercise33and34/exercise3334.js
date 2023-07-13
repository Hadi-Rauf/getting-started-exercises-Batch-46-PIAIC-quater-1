// Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = "1st";
    }
    else if (number === 2) {
        ordinal = "2nd";
    }
    else if (number === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = number + "th";
    }
    console.log(ordinal);
}
// Pizzas
var pizzas = ["Pepperoni", "Margherita", "Hawaiian"];
for (var j = 0; j < pizzas.length; j++) {
    var pizza = pizzas[j];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
