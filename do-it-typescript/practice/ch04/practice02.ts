type Person1 = { name: string; age: number };

const printPerson = ({ name, age }: Person1): void => {
  console.log(`name: ${name}, age: ${age}`);
};

console.log({ name: "eddie", age: 20 });
