let locations: string[] = ["Dubai", "Tokyo", "NYC", "Bali", "Makkah"];

console.log(locations);


console.log([...locations].sort());


console.log(locations);

console.log([...locations].sort().reverse());

console.log(locations);

locations.reverse();

console.log(locations);

locations.reverse();

console.log(locations);

locations.sort((a, b) => b.localeCompare(a));

console.log(locations);
