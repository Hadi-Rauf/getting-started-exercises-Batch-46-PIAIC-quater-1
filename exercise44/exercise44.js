function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    console.log("Bread + " + ingredients.join(" + ") + " + Bread");
    console.log("Enjoy your sandwich!");
    console.log("------------------------");
}
// Calling the function with different numbers of arguments
make_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
make_sandwich("Ham", "Swiss Cheese", "Mustard");
make_sandwich("Chicken", "Bacon", "Avocado", "Mayonnaise", "Pickles");
