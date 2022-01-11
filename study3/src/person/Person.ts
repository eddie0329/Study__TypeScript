let MAX_AGE = 100;

export interface IPerson {
  name: string;
  age: number;
  etc?: boolean;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil(Math.random() * max);
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({ name, age });

let person: object = { name: 'jack', age: 11 }

const arrayLength = (a: IPerson[]) :number => a.length;

enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
  DEBUG = "DEBUG"
}
