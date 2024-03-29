
/* _____________ Your Code Here _____________ */

type If<C extends true | false, T, F> = C extends null ? error : C extends true ? T : F;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>