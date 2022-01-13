/* _____________ Your Code Here _____________ */

type LookUp<U extends { type: string }, T> = 
  U extends U ? 
  U["type"] extends T ? 
  U : 
  never : 
  never;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]

type test = LookUp<Animal, 'dog'>;
