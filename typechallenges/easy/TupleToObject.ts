
/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

type error = TupleToObject<[[1, 2], {}]>

type test = TupleToObject<typeof tuple>
