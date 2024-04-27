// Question 127: Convert a traditional function expression to an arrow function.
var _this = this;
function traditionalFunc(num1, num2) {
    return num1 + num2;
}
console.log(traditionalFunc(2, 4));
var arrowFun = function (a, b) { return a + b; };
console.log(arrowFun(2, 4));
// Question 128: Create an arrow function that takes multiple parameters and returns the product of 
// all parameters.
var productOfAllNumbers = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (total, number) { return total * number; }, 1);
};
console.log(productOfAllNumbers(2, 2, 2));
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var traditionalVsArrow = {
    name: "Muhammad Shabbir",
    traditionalFunction: function () {
        console.log(this.name);
    },
    arrowFunction: function () {
        console.log(_this.name);
    }
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
