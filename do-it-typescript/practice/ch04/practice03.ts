interface IPerson {
  name: string;
}

const person: object = {
  name: "eddie",
  age: 20
};

console.log((person as IPerson).name);
