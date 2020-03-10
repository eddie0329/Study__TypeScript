interface INameable {
  name: string;
}

let obj: object = { name: "eddie" };

const name1 = (<INameable>obj).name;
const name2 = (obj as INameable).name;

console.log(name1, name2);
