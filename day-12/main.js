// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
var pizzaFlavoures = ["Chicken Tikka", "Fajita", "Chicken Mughlai", "Chicken Fajita"];
pizzaFlavoures.forEach(function (falvours) {
    console.log("I like ".concat(falvours, " pizza."));
});
console.log('I really love pizza!');
// Question 35: Animals: Highlight animals with a common trait.
var animalsList = ["dog", "cat", "rabbit"];
animalsList.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
// Question 36: T-Shirt: Create a function for customizing t-shirts.
function makeShirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
makeShirt("Large Size", "Eat Sleep Code Repeat");
