const person = {
  name: "eddie",
  age: 20
};

for (let key in person) {
  console.log(`key: ${key}, value: ${person[key]}`);
}

// key: name, value: eddie
// key: age, value: 20
