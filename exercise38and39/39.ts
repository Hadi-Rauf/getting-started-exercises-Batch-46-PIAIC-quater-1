function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  
  const location1 = city_country("Karachi", "Pakistan");
  const location2 = city_country("Sydney", "Australia");
  const location3 = city_country("Barcelona", "Spain");
  
  console.log(location1);
  console.log(location2);
  console.log(location3);