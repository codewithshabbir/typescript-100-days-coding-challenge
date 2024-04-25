// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function currentDate(){
    const dateObject = new Date();
    const day = String(dateObject.getDate()).padStart(2,'0');
    const month = String(dateObject.getMonth() + 1).padStart(2,'0');
    const year = dateObject.getFullYear();

    const dateFormat = day + '-' + month + '-' + year;
    return dateFormat;
}

console.log(currentDate());

// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function daysUntilNewYear(){
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");

// Question 99: Generate a date object representing your next birthday and log it to the console.

function getNextBirthday(month: number, day: number):Date {
    const today = new Date();
    const getYear = today.getFullYear();
    const getBirthday = new Date(getYear, month - 1, day);

    if(getBirthday < today){
        getBirthday.setFullYear(getYear + 1);
    }
    return getBirthday;
}

const nextBirthday = getNextBirthday(3, 8);

console.log("Next birthday on:", nextBirthday.toLocaleDateString());