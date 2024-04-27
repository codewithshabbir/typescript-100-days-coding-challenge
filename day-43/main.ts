// Question 127: Convert a traditional function expression to an arrow function.

function traditionalFunc(num1: number, num2:number): number{
    return num1 + num2;
}
console.log(traditionalFunc(2,4));

const arrowFun = (a:number, b:number):number => a + b;

console.log(arrowFun(2,4));

// Question 128: Create an arrow function that takes multiple parameters and returns the product of 
// all parameters.

const productOfAllNumbers = (...num: number[]) => num.reduce((total, number) => total * number,1);

console.log(productOfAllNumbers(2,2,2));

// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
    name: "Muhammad Shabbir",
    traditionalFunction: function(){
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    }
}

traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();