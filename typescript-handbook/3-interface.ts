interface LabelValue {
  label?: string;
  temp?: string;
  temp2?: string;
}

function printLabel(labeledObj: LabelValue) {
  console.log(labeledObj.label);
  const aaa = labeledObj.temp;
  console.log(labeledObj.temp);
}

const temp = {
  label: "eddie",
};

printLabel(temp);

interface NumberDictionary {
  [index: string]: number;
  length: number;
}
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}
