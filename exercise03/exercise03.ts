let pName = "hadi" 
console.log(pName.toLowerCase());

console.log(pName.toUpperCase())

//making function called toTittleCase
function toTitleCase(str: string) {
return str.charAt(0).toUpperCase()+str.slice(1)
}

console.log(toTitleCase(pName))