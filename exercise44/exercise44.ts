function make_sandwich(...ingredients: string[]) {
    console.log("Sandwich order summary:");
    console.log("Bread + " + ingredients.join(" + ") + " + Bread");
    console.log("Enjoy your sandwich!");
    console.log("------------------------");
  }
  

  make_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
  make_sandwich("Ham", "Swiss Cheese", "Mustard");
  make_sandwich("Chicken", "Bacon", "Avocado", "Mayonnaise", "Pickles");
  