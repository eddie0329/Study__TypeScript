
/* _____________ Your Code Here _____________ */

type TupleToUnion<T extends any[]> = T[number]


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

type test = TupleToUnion<[123, '123', true]>
