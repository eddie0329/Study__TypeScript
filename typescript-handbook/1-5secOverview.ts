function greeter(person: string) {
  console.log("Hello, " + person);
}

let person: string = "Eddie";
greeter(person);

interface User {
  firstName: string;
  lastName: string;
}

function greet(user: User) {
  console.log(`Hello! ${user.firstName} ${user.lastName}`);
}

const user: User = {
  firstName: "Eddie",
  lastName: "Choi"
}

greet(user);

class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName} ${lastName}`;
  }
}

const student = new Student('Eddie', 'Choi');
console.log(student.fullName);
console.log(student.lastName);
console.log(student.firstName);
