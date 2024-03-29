/* _____________ Your Code Here _____________ */

type Merge<F, S> = {
  [K in (keyof F | keyof S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '../utils'

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
	a: number;
	b: number;
	c: boolean;
  }>>
]

type test = Merge<Foo, Bar>;

