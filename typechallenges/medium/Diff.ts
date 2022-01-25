/* _____________ Your Code Here _____________ */

type Diff<O, O1> = {
  [P in keyof O | keyof O1 as Exclude<P, keyof O & keyof O1>]: P extends keyof O
    ? O[P]
    : P extends keyof O1
    ? O1[P]
    : never;
};

/* _____________ Test Cases _____________ */
import { Equal, Expect } from "../utils";

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
];
