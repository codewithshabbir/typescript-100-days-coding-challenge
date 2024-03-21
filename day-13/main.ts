// Question 37: Large Shirts: Default values in make_shirt().

function makeShirts(size: string = "Large", message: string = "I Love TypeScript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

makeShirts();
makeShirts("Medium");
makeShirts("Small", "Eat Sleep Code Repeat");

// Question 38: Cities: Describing cities with a function.

function describeCity(cityName: string, countryName: string = "Pakistan"){
    console.log(`${cityName} is in ${countryName}`);
}

describeCity("Karachi");
describeCity("Lahore");
describeCity("Alberta", "Canada");

// Question 39: City Names: Formatting city-country pairs.

function cityCountry(city: string, country: string): string{
    let countryData: string = `${city}, ${country}`;
    return countryData;
}

let countryString: string = cityCountry("Lahore", "Pakistan");
console.log(countryString);// another way
console.log(cityCountry("Karachi","Pakistan"));
console.log(cityCountry("Alberta","Canada"));