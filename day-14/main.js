// Question 40: Album: Create objects for music albums.
function makeAlbum(artistName, albumTitle, track) {
    var album = { artistName: artistName, albumTitle: albumTitle };
    if (track) {
        album['track'] = track;
    }
    return album;
}
console.log(makeAlbum("Artist One", "First Album"));
console.log(makeAlbum("Artist two", "Second Album", 8));
console.log(makeAlbum("Artist three", "Third Album"));
// Question 41: Magicians: Display magician names from an array.
var magiciansName = ["Khadim", "Shabbir", "Burhan"];
function showMagician(magician) {
    magician.forEach(function (name) {
        console.log(name);
    });
}
showMagician(magiciansName);
// Question 42: Great Magicians: Add "the Great" to magician names.
function greatMagician(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
        // console.log(magicians[i]);
    }
}
var orignalArr = showMagician(magiciansName);
greatMagician(magiciansName);
console.log(orignalArr);
