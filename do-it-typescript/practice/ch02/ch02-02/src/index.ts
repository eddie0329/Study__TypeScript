import { IPerson, makePerson } from "./person/Person";

const testMakePerson = (): void => {
  let jane: IPerson = makePerson("jane");
  let jack: IPerson = makePerson("jack");
  console.log(jane, jack);
};

testMakePerson();
// result
// { name: 'jane', age: 8 } { name: 'jack', age: 25 }
