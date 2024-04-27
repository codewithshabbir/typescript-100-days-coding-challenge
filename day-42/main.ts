// Question 124: Create a function inside an object that returns the object's own name property
// using the this keyword.

const person = {
  name: "Muhammad Shabbir",
  getname: function () {
    return this.name;
  },
};

console.log(person.getname());

// Question 125: Modify a method in an object to use the this keyword to access another property in the 
// same object.

const rectangle = {
  length: 4,
  width: 5,
  getArea: function () {
    return this.length * this.width;
  },
};

console.log(rectangle.getArea());

// Question 126: Explain how the this keyword changes its value when used inside a nested function
// within a method.

const student = {
  name: "Muhammad Shabbir",
  outerMethod: function () {
    console.log(this.name);
    const innerMethod = () => {
      console.log(this.name);
    };

    innerMethod();
  },
};

student.outerMethod();
