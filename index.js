// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
};
function destructivelyPrependCat(name) {
    cats.unshift(name);
};
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}
function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(name);
    return copyOfCats;
}
function removeLastCat() {
    const copyOfCats = cats.slice();
    copyOfCats.pop();
    return copyOfCats
}
function removeFirstCat() {
    const copyOfCats = cats.slice()
    copyOfCats.shift();
    return copyOfCats
}
