import { IPerson, makePerson } from './person/Person';

const testPerson = (): void => {
  let jane: IPerson = makePerson('jane');
  let jack: IPerson = makePerson('jack');
  console.log({ jane, jack });
};

testPerson();
