var animals = ["dog", "cat", "rabbit"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    if (animal === "dog") {
        console.log("A ".concat(animal, " would make a great pet."));
    }
    else if (animal === "cat") {
        console.log("A ".concat(animal, " can be an independent companion."));
    }
    else if (animal === "rabbit") {
        console.log("A ".concat(animal, " is a cute and low-maintenance pet."));
    }
}
