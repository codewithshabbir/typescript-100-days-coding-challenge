// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
var fruits = ["Apple", "Mango", "Grapes"];
fruits.push("Banana");
console.log(fruits);
// Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement(arr) {
    return arr.pop();
}
console.log("Remove Last Element: ", removeLastElement(fruits));
console.log(fruits);
// Question 93: Find the index of "Mango" in an array of fruits and replace it with "Banana".
function replaceMangoWithBanana(arr) {
    var index = arr.indexOf("Mango");
    var replaceArr = fruits[index] = "Banana";
    return replaceArr;
}
console.log("Replace Element", replaceMangoWithBanana(fruits));
console.log("Replace Array", fruits);
