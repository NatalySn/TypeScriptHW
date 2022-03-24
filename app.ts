// 1

type concatType = string;
const concat = (first:concatType,second:concatType) => {
  const res = first+second;
  return res;
}
console.log(concat("1","2"));

// 2
type DifType = string|number;
interface TaskTypes{
    howIDoIt:string;
    simeArray:DifType[]
    withData:[{}]
}

const myHometask:TaskTypes = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3

interface MyArray<T> {
	[N: number]: T;
	reduce(fn:(a:T,b:T)=>T);
}

const tsArray:MyArray<number> = [1,2,3,4]
console.log(tsArray.reduce((a,b)=>a+b));
