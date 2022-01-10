class BasicClass {
  constructor(public value: number) {
    return this;
  }

  add(num1: number, num2: number): this {
    console.log(num1 + num2);
    return this;
  }

  subtract(num1: number, num2: number): this {
    console.log(num1 - num2);
    return this;
  }
}

const temp1 = new BasicClass(10);
temp1.add(1, 2).subtract(2, 1);

type ObjectLiteral<T> = {
  [P in keyof T]?: T[P]
}

const temp2 = { a: 1, b: 2, c: 3, d: 4 };
const partial: Partial<typeof temp2> = { a: 1 };

type Diff<T, U> = T extends U ? never : T;  // U에 할당할 수 있는 타입을 T에서 제거
type Filter<T, U> = T extends U ? T : never;  // U에 할당할 수 없는 타입을 T에서 제거
type test123 = Diff<"d", "a">;
type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
}

const temp5 = { a: 1, b: 2, c: 3 };
console.log(getProperty(temp5, "b"));
