
/* _____________ Your Code Here _____________ */

type SpaceChar = ' ' | '\n' | '\t';

type Trim<S extends string> = 
  S extends `${SpaceChar}${infer Rest}` ?
  Trim<Rest> :
  S extends `${infer Rest}${SpaceChar}` ?
  Trim<Rest> :
  S;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]


