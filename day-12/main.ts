// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizzaFlavoures: string[] = ["Chicken Tikka", "Fajita", "Chicken Mughlai", "Chicken Fajita"];

pizzaFlavoures.forEach(falvours => {
    console.log(`I like ${falvours} pizza.`);
})
console.log('I really love pizza!');

// Question 35: Animals: Highlight animals with a common trait.

let animalsList: string[] = ["dog", "cat", "rabbit"];

animalsList.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`)
})
console.log(`Any of these animals would make a great pet!`);

// Question 36: T-Shirt: Create a function for customizing t-shirts.

function makeShirt(size:string, message:string){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}
makeShirt("Large Size", "Eat Sleep Code Repeat");
