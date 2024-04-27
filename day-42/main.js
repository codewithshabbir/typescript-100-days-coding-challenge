// Question 124: Create a function inside an object that returns the object's own name property 
// using the this keyword.
var person = {
    name: "Muhammad Shabbir",
    getname: function () {
        return this.name;
    }
};
console.log(person.getname());
var rectangle = {
    length: 4,
    width: 5,
    getArea: function () {
        return this.length * this.width;
    }
};
console.log(rectangle.getArea());
// Question 126: Explain how the this keyword changes its value when used inside a nested function 
// within a method.
var student = {
    name: "Muhammad Shabbir",
    getName: function () {
        var _this = this;
        console.log(this.name);
        var getname = function () {
            console.log(_this.name);
        };
        getname();
    }
};
student.getName();
