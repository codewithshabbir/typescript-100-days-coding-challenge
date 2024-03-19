// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
var favoriteTransportationMode = ["Ducati superbike", "Harley-Davidson cruiser", "Kawasaki Ninja sportbike"];
favoriteTransportationMode.forEach(function (element) {
    console.log("I would like to own a ".concat(element));
});
// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
var invitePeoples = ["Khadim", "Shabbir", "Abdullah"];
invitePeoples.forEach(function (peoples) {
    console.log("Dear ".concat(peoples, ", would you like to join me for dinner?"));
});
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send
// out a new set of invitations with a replacement guest.
var invitePeoplesUpdate = ["Khadim", "Shabbir", "Abdullah"];
var unableToAttend = "Shabbir";
console.log("".concat(unableToAttend, " can't make it to dinner"));
//Replace Guest
var newGuest = "Muhammad";
invitePeoplesUpdate[invitePeoplesUpdate.indexOf(unableToAttend)] = newGuest;
console.log(invitePeoplesUpdate);
//New Invitation
invitePeoplesUpdate.forEach(function (peoples) {
    console.log("Dear ".concat(peoples, ",  would you like to join me for dinner?"));
});
