const split = (string: string, delim: string = ""): string[] =>
  string.split(delim);

console.log(split("hello")); //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(split("h_e_l_l_o", "_")); //[ 'h', 'e', 'l', 'l', 'o' ]
