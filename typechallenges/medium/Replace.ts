/* _____________ Your Code Here _____________ */

type Replace<S extends string, From extends string, To extends string> = 
  From extends '' ? 
  S :  
  S extends `${infer Front}${From}${infer Last}` ? 
  `${Front}${To}${Last}` : 
  S;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]
