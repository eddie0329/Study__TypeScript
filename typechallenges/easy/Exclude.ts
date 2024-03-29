/* _____________ Your Code Here _____________ */

type MyExclude<T, U> = T extends U ? never : T;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]

type test = MyExclude<"a" | "b" | "c", "a">
