/* _____________ Your Code Here _____________ */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in keyof T]: T[key];
} & {
  [key in keyof T as key extends K ? never : key]: T[key];
}


/* _____________ Test Cases _____________ */
import { Alike, Expect } from '../utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

type test = MyReadonly2<Todo1, 'title'>;