// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the
//  continue statement.
// for (let i = 1; i <= 10; i++) {
//     if(i === 5){
//         continue;
//     }
//     console.log(i);
// }
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
// let count = 10;
// while(count >= 1){
//     if (count === 5) {
//         break;
//     }
//     console.log(count);
//     count--;
// }
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function checkVowels(str) {
    var vowels = ("aeiouAEIOU");
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("Vowels Found", char);
        }
    }
}
checkVowels("Muhammad Shabbir");
