/* _____________ Your Code Here _____________ */

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer S> ? S : T[K] }>


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases =[
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
]

