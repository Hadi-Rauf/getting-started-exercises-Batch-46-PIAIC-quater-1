let guestList: string[] = ["Valentino Rossi", "Marc Márquez", "Jack Miller"];

function sendInvitations(guests: string[]): void {
  guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a memorable evening.`);
  });
}

sendInvitations(guestList);
