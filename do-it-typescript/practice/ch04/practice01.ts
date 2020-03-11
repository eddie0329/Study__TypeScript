type Person = { name: string; age: number };

const makePerson = (name: string, age: number = 10): Person => {
  const person: Person = { name, age };

  return person;
};

console.log(makePerson("eddie"));
