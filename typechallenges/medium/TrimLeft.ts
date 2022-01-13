/* _____________ Your Code Here _____________ */

type SpaceChar = " " | "\n" | "\t";
type TrimLeft<S extends string> = 
  S extends `${SpaceChar}${infer Rest}` ? 
  TrimLeft<Rest> : 
  S;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]

type test = TrimLeft<' str'>
