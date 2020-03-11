export default class A {
  value: number = 1;
  method: () => void = function(): void {
    console.log(this.value);
  };
}
