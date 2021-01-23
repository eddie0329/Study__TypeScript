interface IMyCounter {
  increment(): void;
  decrement(): void;
}

export default class MyCounter implements IMyCounter  {
  count: number;

  constructor(initialCount: number) {
    this.count = initialCount;
    this.display();
  }

  display() {
    document.querySelector('#count').innerHTML = `${this.count}`;
  }

  increment() {
    this.count++;
    this.display();
  }

  decrement() {
    this.count--;
    this.display();
  }
}