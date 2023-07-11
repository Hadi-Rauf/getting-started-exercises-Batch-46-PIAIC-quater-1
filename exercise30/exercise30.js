// User Greeting
var usernames = ['admin', 'eric', 'jennifer', 'john', 'susan'];
if (usernames.length > 0) {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Checking Usernames
var currentUsers = ['eric', 'jennifer', 'john', 'susan', 'david'];
var newUsers = ['john', 'susan', 'steve', 'emily', 'rachel'];
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _a = 0, newUsers_1 = newUsers; _a < newUsers_1.length; _a++) {
    var newUser = newUsers_1[_a];
    if (currentUsersLower.includes(newUser.toLowerCase())) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
