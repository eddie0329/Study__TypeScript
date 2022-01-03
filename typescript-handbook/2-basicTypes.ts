enum Color {
  Red,
  Green,
  Blue
}
const colorName: string = Color[2];
console.log(colorName); // Blue

const someValue: any = "Hello World";
const strlength: number = (someValue as string).length;
console.log(strlength); // 11

const err = (msg: string): never => {
  throw new Error(`Custom Error test: ${msg}`);
}
err('HELLO');
