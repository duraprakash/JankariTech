// Rest
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));

// Spread
const arr = [1,2,3];
const newArr = [...arr, 4, 5];
console.log(newArr);
