function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums
var album1 = make_album("AP Dhillon", "Two Hearts Never Break the Same", 6);
var album2 = make_album("Shubh", "Still Rollin", 7);
var album3 = make_album("Talha Anjum", "Open Letter", 15);
console.log(album1);
console.log("---------------------------------------------------------------------");
console.log(album2);
console.log("---------------------------------------------------------------------");
console.log(album3);
