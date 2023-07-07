var pName = "hadi";
console.log(pName.toLowerCase());
console.log(pName.toUpperCase());
function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(toTitleCase(pName));
