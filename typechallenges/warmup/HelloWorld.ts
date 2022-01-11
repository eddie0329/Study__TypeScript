import { Equal, Expect, NotAny } from '../utils/index';

// my code
type HelloWorld = string;

// test
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
