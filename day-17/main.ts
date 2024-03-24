// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing 
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function hobbies(...hobbies: string[]){

    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}

hobbies("Eating", "Sleeping", "Coding");

// Question 50: Multiline Template Literals: Use template literals to create a multiline string
//  that describes your ideal day. Include at least three different activities.

let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;

console.log(myIdealDay);

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area 
// of a rectangle and refactor it into an arrow function.

function areaOfRectangle(length: number, width: number): number{
    let area = length * width;
    return area;
}

let area_of_rectangle = areaOfRectangle(24, 90);
console.log(area_of_rectangle);

let areaOfRectangleArrowFunc = (length: number, width: number): number => length*width;

console.log(areaOfRectangleArrowFunc(20,34));