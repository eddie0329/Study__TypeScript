import { range } from "./helper";

let numberArray = range(1, 10); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const even = numberArray.filter(number => number % 2 === 0);
const odd = numberArray.filter(number => number % 2 !== 0);
console.log(even); // [ 2, 4, 6, 8, 10 ]
console.log(odd); // [ 1, 3, 5, 7, 9 ]
