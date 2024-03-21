// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magiciansNames: string[] = ["Khadim", "Shabbir", "Burhan"];

function showMagicians(magician: string[]){
    magician.forEach(name => {
        console.log(name);
    })
}

function greatMagicians(magician: string[]){
    let great_magician: string[] = [];
    magician.forEach(name => {
        great_magician.push(name + " the Great");
    });
    return great_magician;
}

showMagicians(magiciansNames);// show orignal names
let greatMagicianNames: string[] = greatMagicians(magiciansNames);
showMagicians(greatMagicianNames); // show modify names

// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function sandwich(...item: string []){
    console.log(`Making a sandwich with:${item.join(', ')}`);
}
sandwich("ham", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");

// Question 45: Cars: Create detailed car objects with flexible properties.

function carData(manufacturer: string, model: string, ...extras: [string, any][]): Object{
    let car = {
        manufacturer: manufacturer,
        model: model
    }
    extras.forEach(([key,value]) => car[key] = value);
    return car;
}


console.log( carData("Ferrari 488", "Ferrari S.p.A",["color", "red"], ["year", 2020]));