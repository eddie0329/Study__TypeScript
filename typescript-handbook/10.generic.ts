const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key];
const x = { a: 1, b: 2, c:3 };
const get = getProperty(x, "c");
console.log(get);

interface User {
  name: string
}

const temp = <T extends User>(user: T):T => {
  console.log(user.name);
  return user;
}

const user1 = {
  name: "Eddie"
}

temp(user1);
