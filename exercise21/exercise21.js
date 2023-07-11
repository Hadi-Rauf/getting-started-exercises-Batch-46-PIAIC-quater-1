var countries = [
    {
        name: "Germany",
        capital: "Berlin",
        population: 84270625,
        continent: "Europe",
    },
    {
        name: "Thailand",
        capital: "Bangkok",
        population: 71801279,
        continent: "Asia",
    },
    {
        name: "Algeria",
        capital: "Algiers",
        population: 42228429,
        continent: "Africa",
    },
];
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("Country: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
    console.log("Continent: ".concat(country.continent));
    console.log("________________");
}
