//30-31-32
const usernames: string[] = ['admin', 'eric', 'jennifer', 'john', 'susan'];

if (usernames.length > 0) {
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}


const currentUsers: string[] = ['eric', 'jennifer', 'john', 'susan', 'david'];
const newUsers: string[] = ['john', 'susan', 'steve', 'emily', 'rachel'];

const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (const newUser of newUsers) {
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
