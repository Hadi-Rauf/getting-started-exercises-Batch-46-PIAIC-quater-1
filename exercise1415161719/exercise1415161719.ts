const guestList = ["Elon Musk", "Steve Jobs", "Vladimir Putin"];

console.log(`Hello, ${guestList[0]}! You are invited to my dinner party because you are a legendary business man.`);
console.log(`Hello, ${guestList[1]}! You are invited to my dinner party because you were a legendary entrepreneur.`);

guestList.pop();
guestList.push("Thomas Edison");
console.log(`Hello, ${guestList[2]}! You are invited to my dinner party because you brilliant inventor and business man.`);

guestList.unshift("Nikola Tesla");
guestList.splice(Math.floor(guestList.length / 2), 0, 'Albert Einstein')
guestList.push("Ken Block");
guestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to the dinner. Please join us.`);
});

while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

guestList.forEach((guest) => {
  console.log(`${guest}, you're still invited to dinner.`);
});

let num_guests = guestList.length;
console.log(`You are inviting ${num_guests} guests to dinner.`)