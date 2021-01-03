//Boolean
let isDone: boolean = true;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;

//String
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

//Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuble
let x: [string, number];
x = ["hello", 10]; // OK

//Enum
enum Color {
    Red, //value = 0
    Green, //value = 1
    Blue, //value = 2
  }
let c: Color = Color.Green;

//As
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

let someValue2: unknown = "this is a string";
let strLength2: number = (<string>someValue).length;