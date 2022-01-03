interface User {
  age?: number;
  name: string;
}

const person: User = {
  name: 'eddie'
}

const sayHello = (user: User) => {
  console.log(`hello, ${user.name}`);
}

sayHello(person);
