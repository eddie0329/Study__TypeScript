const str: string = 'HELLO';

const num: number = 1;

const numArr: Array<number> = [1, 2, 3];
const numArr2: number[] = [1, 2, 3];
const strArr: Array<string> = ['1', '2', '3'];
const numAndStrArr: Array<number | string> = [1, '2'];

// tuple
const address: [string, number] = ['1l', 1];

// object
const obj: object = {};
const person: object = {
  name: 'eddie',
  age: 20
};
const person2: { name: string, age: number } = {
  name: 'eddie',
  age: 20,
};

let show: boolean = true;
