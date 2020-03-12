let names = ["eddie", "same", "jane"];

for (let index in names) {
  const name = names[index];
  console.log(`index: ${index}, name: ${name}`);
}

// index: 0, name: eddie
// index: 1, name: same
// index: 2, name: jane
