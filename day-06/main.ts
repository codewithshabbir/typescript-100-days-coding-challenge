// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guestList: string[] = ["Khadim", "Shabbir", "Ahmed" ,"Abdullah"];

guestList.push("Adil"); // add end of an array
guestList.unshift("Burhan"); // add beginning of an array
guestList.splice(Math.floor(guestList.length / 2), 0, "Hamza"); // add middle of an array

guestList.forEach(guests => {
    console.log(`Dear ${guests},  would you like to join me for dinner?`);
})

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
// and you can only invite two guests.

let newGuestList: string[] = ["Khadim", "Shabbir", "Ahmed", "Abdullah"];
console.log("Unfortunately, I can only invite two people for dinner.");

while (newGuestList.length > 2) {
  let removeGuest = newGuestList.pop();
  console.log(`Sorry ${removeGuest}, I can't invite you to dinner.`);
}

newGuestList.forEach((guests) => {
  console.log(`Dear ${guests},  You are still invited to dinner.`);
});
newGuestList.splice(0, newGuestList.length);
console.log(newGuestList);

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let worldPlaces: string[] = ["Saudia Arabia", "Dubai", "Turkey", "China", "USA"];

console.log("Orignal Order: ", worldPlaces);

console.log("Alphabetically Sort: ", [...worldPlaces].sort());

console.log("Orignal Order: ", worldPlaces);

console.log("Reverse Alphabetical Order: ", [...worldPlaces].slice().sort().reverse());

console.log("Orignal Order: ", worldPlaces);

worldPlaces.reverse();
console.log("Reverse Order: ", worldPlaces);

worldPlaces.reverse()
console.log("Orignal Order: ", worldPlaces);

worldPlaces.sort()
console.log("Sort in Alphabetical Order: ", worldPlaces);

worldPlaces.reverse()
console.log("Reverse in Alphabetical Order: ", worldPlaces);