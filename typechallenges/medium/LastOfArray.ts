/* _____________ Your Code Here _____________ */

type Last<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

type test = Last<[1, 2, 3, 1]>;
