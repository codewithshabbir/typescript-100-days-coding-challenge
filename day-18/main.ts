// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
// Include its brand, model, and other key features like how much storage it has, the size of its screen, 
// and how long its battery lasts.

let smartphone = {
    brand: "Oppo",
    model: "Oppo  A96",
    spec: {
        storage: "8/128",
        screenSize: "6 inches",
        battery: "18 hours"
    }
}

console.log(smartphone);

// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
//  what a computer programmer knows, like coding languages, tools, and software frameworks. 
//  Find a way to get three specific skills from this list and show them.

let developerSkills = {
    codingLanguages: ["Javascript", "Typescript", "Python"],
    codingFrameworks: ["React", "Angular", "Vue"],
    codingTools: ["Git", "Webpack", "Docker"]
}

const {codingLanguages, codingFrameworks, codingTools} = developerSkills;

console.log(`Language: ${codingLanguages[2]}, Framework: ${codingFrameworks[2]}, Tools: ${codingTools[2]}`);

// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name
//  of each section based on what you need at that moment, like adjusting labels based on user choices.

function dynamicObjectWithKey(key: string, value: string){
    let dyanmicObject = {}
    dyanmicObject[key] = value;
    return dyanmicObject;
}

let dyanmicObjectStore = dynamicObjectWithKey("theme","dark");
console.log(dyanmicObjectStore);