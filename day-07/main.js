// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message
// indicating the number of people you are inviting to dinner.
var dinnerGuestList = ["Khadim", "Shabbir", "Ahmed", "Abdullah"];
console.log("I am inviting ".concat(dinnerGuestList.length, " people to dinner."));
// Question 20: Think of something you could store in an array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
// a list containing these items.
var countriesList = ["Saudia Arabia", "Dubai", "Turkey", "United States", "China"];
countriesList.forEach(function (country) {
    console.log("I'd like to visit:", country);
});
// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects
//  containing these items.
var carsData = {
    name: "Toyota Camry",
    company: "Toyota",
    model: "Camry"
};
console.log("Car Info: ".concat(carsData.model, " by ").concat(carsData.company, ", model ").concat(carsData.model));
