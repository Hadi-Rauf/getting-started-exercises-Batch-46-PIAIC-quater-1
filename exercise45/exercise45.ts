function store_car_info(manufacturer: string, model: string, ...extras) {
  const carInfo: { [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };
  for (let i = 0; i < extras.length; i += 2) {
    let key = extras[i];
    let value = extras[i + 1];

    carInfo[key] = value;
  }
  return carInfo;
}

const car = store_car_info("Toyota", "Camry", "color", "Blue", "year", 2022);

console.log(car);
