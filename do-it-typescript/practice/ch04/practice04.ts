type KeyValueType = {
  [key: string]: string;
};

const makeObject = (key: string, value: string): KeyValueType => ({
  [key]: value
});

console.log(makeObject("name", "eddie"));
