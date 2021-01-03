interface myObject {
    label: string;
}
function logEvery(label: myObject): void{
    console.log(label);
}
logEvery({label: 'hi'})

//Optional
interface SquareConfig {
    color?: string;
    width?: number;
}

//Read only
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

let a: ReadonlyArray<number> = [1, 2, 3, 4]; //this removes all mutating methods

//Function Types
interface SearchFunc {
    (source: string, subString: string): boolean;
}
const myFunc: SearchFunc = (source, subString) => {
    if(source) {
        return true
    }
    return false
}

//Class Types
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
  
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

//Extending interfaces
interface Shape {
    color: string;
}

interface Square extends Shape {
  sideLength: number;
}
  