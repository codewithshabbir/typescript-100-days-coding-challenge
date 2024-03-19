// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
var famousQuote = "\"Muhammad Iqbal once said, \u201CIf faith is lost, there is no security and there is no life for him who does not adhere to religion.\u201D";
console.log(famousQuote);
// Question 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famousPersonName = "Muhammad Iqbal";
var famousPersonMessage = "\"".concat(famousPersonName, " once said, \u201CIf faith is lost, there is no security and there is no life for him who does not adhere to religion.\u201D");
console.log(famousPersonMessage);
// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the
// beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name
// once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var personName = "\t\n Muhammad Shabbir \n\n";
console.log(personName.trim());
console.log(personName.split(" ")[1] + personName.split(" ")[2]); // remove middle space
