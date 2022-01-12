/* _____________ Your Code Here _____________ */

type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : never;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]
