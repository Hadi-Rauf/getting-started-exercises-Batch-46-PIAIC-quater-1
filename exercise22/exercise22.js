var Array1 = ["1", "2", "3", "4"];
function throwError(index) {
    if (Array1[index] === undefined) {
        throw new Error("Invalid index.");
    }
    else {
        console.log(Array1[index]);
    }
}
throwError(3);
