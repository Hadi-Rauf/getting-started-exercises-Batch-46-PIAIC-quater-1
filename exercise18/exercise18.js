var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["Dubai", "Tokyo", "NYC", "Bali", "Makkah"];
console.log(locations);
console.log(__spreadArray([], locations, true).sort());
console.log(locations);
console.log(__spreadArray([], locations, true).sort().reverse());
console.log(locations);
locations.reverse();
console.log(locations);
locations.reverse();
console.log(locations);
locations.sort(function (a, b) { return b.localeCompare(a); });
console.log(locations);
