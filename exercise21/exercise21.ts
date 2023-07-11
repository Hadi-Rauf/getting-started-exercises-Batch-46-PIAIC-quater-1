// making type
type country = {
    name: string;
    capital: string;
    population: number;
    continent: string;
  };
  

  let Countries: Country[] = [
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
  
  
  for (const country of countries) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Continent: ${country.continent}`);
    console.log("________________")
   
  }