// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

let favoriteTransportationMode: string[] = ["Ducati superbike", "Harley-Davidson cruiser", "Kawasaki Ninja sportbike"];
favoriteTransportationMode.forEach(element => {
    console.log(`I would like to own a ${element}`);
});

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let invitePeoples: string[] = ["Khadim", "Shabbir", "Abdullah"];
invitePeoples.forEach(peoples => {
    console.log(`Dear ${peoples}, would you like to join me for dinner?`);
});

// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send
// out a new set of invitations with a replacement guest.

let invitePeoplesUpdate: string[] = ["Khadim", "Shabbir", "Abdullah"];

let unableToAttend: string = "Shabbir";
console.log(`${unableToAttend} can't make it to dinner`);

//Replace Guest
let newGuest:string = "Muhammad";
invitePeoplesUpdate[invitePeoplesUpdate.indexOf(unableToAttend)] = newGuest;

console.log(invitePeoplesUpdate);

//New Invitation
invitePeoplesUpdate.forEach(peoples => {
console.log(`Dear ${peoples},  would you like to join me for dinner?`);
})