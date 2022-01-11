/* _____________ Your Code Here _____________ */

type MyAwaited<T extends Promise<unknown>> = 
  T extends Promise<infer P> ? 
  P extends Promise<unknown> ? 
  MyAwaited<P> : P : T;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>