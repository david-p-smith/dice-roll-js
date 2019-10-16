function rollDie() {
    let value = 6 * Math.random();
    return Math.ceil(value);
}

let firstDie = rollDie();
let secondDie = rollDie();

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);