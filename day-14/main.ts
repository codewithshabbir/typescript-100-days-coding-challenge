// Question 40: Album: Create objects for music albums.

function makeAlbum(artistName: string, albumTitle: string, track?: number){
    let album = {artistName, albumTitle};
    if (track) {
        album['track'] = track;
    }
    return album;
}

console.log(makeAlbum("Artist One", "First Album"));
console.log(makeAlbum("Artist two", "Second Album", 8));
console.log(makeAlbum("Artist three", "Third Album"));

// Question 41: Magicians: Display magician names from an array.

let magiciansName: string[] = ["Khadim", "Shabbir", "Burhan"];

function showMagician(magician: string[]){
    magician.forEach(name => {
        console.log(name);
    });
}
showMagician(magiciansName);

// Question 42: Great Magicians: Add "the Great" to magician names.

function greatMagician(magicians: string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
        // console.log(magicians[i]);
    }
}
showMagician(magiciansName);
greatMagician(magiciansName)