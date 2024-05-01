// Question 133: Write a JavaScript object and convert it into a JSON string.
var studentData = {
    name: "Muhammad Shabbir",
    age: 20,
    city: "Karachi"
};
console.log(JSON.stringify(studentData));
var jsonToString = JSON.stringify(studentData);
console.log(jsonToString);
// Question 134: Take a JSON string and parse it into a JavaScript object.
var jsonString = "{\"name\":\"Muhammad Shabbir\",\"age\":20,\"city\":\"Karachi\"}";
var jsonStringToJavscriptObj = JSON.parse(jsonString);
console.log(jsonStringToJavscriptObj);
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var person = {
    name: "Muhammad Shabbir",
    age: 20,
    city: "Karachi"
};
var readabilityFormat = JSON.stringify(person, null, 2);
console.log(readabilityFormat);
