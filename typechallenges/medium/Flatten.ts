/* _____________ Your Code Here _____________ */

type Flatten<T extends any[]> = 
  T extends [infer First, ...infer Rest] ?
  [...(First extends any[] ? Flatten<First> : [First]), ...Flatten<Rest>] : 
  [];



/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{foo: 'bar'; 2: 10}, 'foobar']>, [{foo: 'bar'; 2: 10}, 'foobar']>>,
]

type test = [1, [2]];
