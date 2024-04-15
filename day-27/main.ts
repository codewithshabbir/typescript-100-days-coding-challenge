// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with
//  properties for make, model, and year. Then, show how you can access the model property of the car.

const cars = {
    make: "toyota",
    model: "camry",
    year: "2021",
};

console.log(`car make: ${cars.make}, car model: ${cars.model}, car year: ${cars.year}`);

// Question 80: Updating Object Properties: Add a property named color to the existing car object, and
//  then update the year property to 2021. Show how to perform these operations.

let car:{
    make: string,
    model: string,
    year: number,
    color?: string
} = {
    make: "toyota",
    model: "camry",
    year: 2021
};

car.color = "black";
car.year = 2022;

console.log(`car make: ${car.make}, car model: ${car.model}, Updated car year: ${car.year}, car color: ${car.color}`);


// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument
//  and logs all of its properties and values.

let carObject = {
    make: 'tesla',
    model: 'model s',
    year: 2022
  }

  function iteratingOverObject(obj : object) {
    for (const key in obj) {
        console.log(key , obj[key]);
    }
  }
  iteratingOverObject(carObject);

