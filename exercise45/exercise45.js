function store_car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i = 0; i < extras.length; i += 2) {
        var key = extras[i];
        var value = extras[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Calling the function with required information and additional name-value pairs
var car = store_car_info("Toyota", "Camry", 'color', "Blue", 'year', 2022);
// Printing the object that's returned
console.log(car);
