// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

let fruits: string[] = ["Apple", "Mango", "Grapes"];

fruits.push("Banana");
console.log(fruits);

// Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<str>(arr: str[]): str | undefined{
    return arr.pop();
}

console.log("Remove Last Element: ",removeLastElement(fruits));
console.log(fruits);

// Question 93: Find the index of "Mango" in an array of fruits and replace it with "Banana".

function replaceMangoWithBanana(arr: string[]){
    const index = arr.indexOf("Mango");
    const replaceArr = fruits[index] = "Banana";
    return replaceArr;
}
console.log("Replace Element", replaceMangoWithBanana(fruits));
console.log("Replace Array", fruits);
