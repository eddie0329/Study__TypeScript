export const makePerson = (name: string, age: number) => {
  return { name, age }
};

export const testPerson = () => {
  console.log(makePerson('sam', 22));
  console.log(makePerson('jack', 22));
}
