/* _____________ Your Code Here _____________ */

type LengthOfString<S extends string, T  extends any[] = []> = 
  S extends `${infer First}${infer Rest}` ?
  LengthOfString<Rest, [First, ...T]> :
  T['length'];



/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
