
/* _____________ Your Code Here _____________ */

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

