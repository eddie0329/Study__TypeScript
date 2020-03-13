function* rangeGenerator(from: number, to: number) {
  let value = from;

  while (value <= to) {
    yield value++;
  }
}

for (let value of rangeGenerator(1, 3)) {
  console.log(value);
}
// 1
// 2
// 3
