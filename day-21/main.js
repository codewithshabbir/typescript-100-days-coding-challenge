// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks,
//  and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["motorcycles"] = 1] = "motorcycles";
    vehicles[vehicles["trucks"] = 2] = "trucks";
})(vehicles || (vehicles = {}));
console.log(vehicles.cars);
console.log(vehicles[vehicles.cars]);
var studentInfo = {
    name: "Muhammad Shabbir",
    age: 23,
    classes: ["Computer", "Math", "Science"]
};
console.log(studentInfo);
var circle = {
    choice: "circle",
    radius: 5
};
var rectangle = {
    choice: "rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
