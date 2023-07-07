var guestList = ["Valentino Rossi", "Marc Márquez", "Jack Miller"];
function sendInvitations(guests) {
    guests.forEach(function (guest) {
        console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for a memorable evening."));
    });
}
sendInvitations(guestList);
