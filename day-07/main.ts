// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message
// indicating the number of people you are inviting to dinner.

let dinnerGuestList: string[] = ["Khadim", "Shabbir", "Ahmed", "Abdullah"];

console.log(`I am inviting ${dinnerGuestList.length} people to dinner.`);

// Question 20: Think of something you could store in an array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
// a list containing these items.

let countriesList: string[] = ["Saudia Arabia", "Dubai", "Turkey", "United States", "China"];

countriesList.forEach(country =>{
    console.log(`I'd like to visit:`, country);
})

// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects
//  containing these items.

let carsData : {
    name: string;
    company: string;
    model: string;
}={
    name: "Toyota Camry",
    company: "Toyota",
    model: "Camry"
};

console.log(`Car Info: ${carsData.model} by ${carsData.company}, model ${carsData.model}`);