// Question 37: Large Shirts: Default values in make_shirt().
function makeShirts(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
makeShirts();
makeShirts("Medium");
makeShirts("Small", "Eat Sleep Code Repeat");
// Question 38: Cities: Describing cities with a function.
function describeCity(cityName, countryName) {
    if (countryName === void 0) { countryName = "Pakistan"; }
    console.log("".concat(cityName, " is in ").concat(countryName));
}
describeCity("Karachi");
describeCity("Lahore");
describeCity("Alberta", "Canada");
// Question 39: City Names: Formatting city-country pairs.
function cityCountry(city, country) {
    var countryData = "".concat(city, ", ").concat(country);
    return countryData;
}
var countryString = cityCountry("Lahore", "Pakistan");
console.log(countryString); // another way
console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Alberta", "Canada"));
