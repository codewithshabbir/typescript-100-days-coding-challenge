// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing 
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
}
hobbies("Eating", "Sleeping", "Coding");
// Question 50: Multiline Template Literals: Use template literals to create a multiline string
//  that describes your ideal day. Include at least three different activities.
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for a jog.\n2. Spending a few hours coding on a personal project.\n3. Ending the day by reading a good book.";
console.log(myIdealDay);
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area 
// of a rectangle and refactor it into an arrow function.
function areaOfRectangle(length, width) {
    var area = length * width;
    return area;
}
var area_of_rectangle = areaOfRectangle(24, 90);
console.log(area_of_rectangle);
var areaOfRectangleArrowFunc = function (length, width) { return length * width; };
console.log(areaOfRectangleArrowFunc(20, 34));
