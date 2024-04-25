// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. 
// Add three countries to the Map.

let countries = new Map<string, string>();

countries.set("Pakistan", "Karachi");
countries.set("Bangladesh", "Dhaka");
countries.set("Canada", "Alberta");

console.log(countries);


// Question 113: Write a function that checks if a Map contains a key for "Canada"and logs the
// capital if it exists.

function checkCityExist(countries: Map<string, string>):void{
    if(countries.has("Pakistan")){
        console.log(`${countries.get("Pakistan")} is the city of Pakistan`);
    }
    else{
        console.log("Pakistan is not in the Map");
    }
}

checkCityExist(countries);


// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

let students = new Map<number, string>();

students.set(1, "Shabbir");
students.set(2, "Burhan");
students.set(3, "Adil");

students.forEach((name, id)=>{
    console.log(`Student Id: ${id} and Student name: ${name}`);
})