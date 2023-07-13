function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = ""; }
    console.log("Creating a ".concat(size, " shirt with the message: ").concat(message));
}
make_shirt("large", "This is Large Shirt");
make_shirt("medium", "This is Medium Shirt");
make_shirt("small", "This is Small Shirt");
