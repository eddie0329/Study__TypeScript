import { range } from "./helper";

const array = range(1, 5);
const doubleNumbers = array.map(value => value * value);
console.log(doubleNumbers); // [ 1, 4, 9, 16, 25 ]
