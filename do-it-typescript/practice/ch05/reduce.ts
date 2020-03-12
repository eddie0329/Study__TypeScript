import { range } from "./helper";

const array = range(1, 10);

const sum = array.reduce((result, value) => result + value, 0);
console.log(sum); // 55
