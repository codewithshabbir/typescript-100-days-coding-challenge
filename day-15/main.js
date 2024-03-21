// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magiciansNames = ["Khadim", "Shabbir", "Burhan"];
function showMagicians(magician) {
    magician.forEach(function (name) {
        console.log(name);
    });
}
function greatMagicians(magician) {
    var great_magician = [];
    magician.forEach(function (name) {
        great_magician.push(name + " the Great");
    });
    return great_magician;
}
showMagicians(magiciansNames); // show orignal names
var greatMagicianNames = greatMagicians(magiciansNames);
showMagicians(greatMagicianNames); // show modify names
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Making a sandwich with:".concat(item.join(', ')));
}
sandwich("ham", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
// Question 45: Cars: Create detailed car objects with flexible properties.
function carData(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(carData("Ferrari 488", "Ferrari S.p.A", ["color", "red"], ["year", 2020]));
