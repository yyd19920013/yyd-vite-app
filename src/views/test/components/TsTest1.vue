<template>
  <div class="TsTest1"></div>
</template>
<script lang="ts">
import { onMounted } from 'vue';

export default {
  data() {
    return {};
  },
  setup(props: object, context: object) {
    let isDone: boolean = false;
    let decLiteral: number = 6;
    let name: string = 'bob';
    let sentence: string = `Hello,my name is ${name}`;
    console.log(sentence);
    let list: number[] = [1, 2, 3];
    let list1: Array<number> = [1, 2, 3];
    let x: [string, number];
    x = ['hello', 10];
    // x = [10, 'hello'];
    console.log(x[0].substr(1, 3));
    //console.log(x[1].substr(1));
    // x[3] = 'world';
    // console.log(x[5].toString());
    // x[6] = true;
    enum Color {
      Red = 1,
      Green = 'green',
      Blue = 4,
    }
    let c: Color = Color.Green;
    console.log(c);
    let notSure: any = 4;
    notSure = 'maybe a string instead';
    notSure = false;
    let arr: any[][] = [[1, '2']];
    function warnUser(): void {
      console.log('This is my waring message');
    }
    let unusable: void = undefined;
    let u: undefined = undefined;
    let n: null = null;
    let lh: string | null | undefined | number = 1;
    function error(message: string): never {
      throw new Error(message);
    }
    let someValue: any = 'this is a string';
    let strLength: number = (<string>someValue).length;
    let strLength1: number = (someValue as string).length;
    interface LabelledValue {
      label: string;
    }
    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);
    interface SquareConfig {
      color?: string;
      width?: number;
    }
    function createSquare(config: SquareConfig): { color: string; area: number } {
      let newSquare = { color: 'white', area: 100 };

      if (config.color) {
        newSquare.color = config.color;
      }
      if (config.width) {
        newSquare.area = config.width * config.width;
      }
      return newSquare;
    }
    let mySquare = createSquare({ color: 'black' });
    interface Point {
      readonly x: number;
      readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    // p1.x = 5;
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 12;
    // ro.push(5);
    // ro.length = 100;
    // a = ro;
    a = ro as number[];
    // let mySquare1 = createSquare({ colour: 'red', width: 100 });
    let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
    interface SquareConfig1 {
      color?: string;
      width?: number;
      [propName: string]: any;
    }
    let json: SquareConfig1 = { a: 2, b: 3 };
    let squareOptions = { colour: "red", width: 100 };
    let mySquare3 = createSquare(squareOptions);
    interface SearchFunc {
      (source: string, substring: string): boolean;
    }
    let mySearch: SearchFunc = function(source: string, subString: string) {
      let result = source.search(subString);

      return result > -1;
    }
    interface StringArray {
      [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ['Bob', 'Fred'];
    let myStr: string = myArray[0];
    class Animal {
      name: string = 'dog';
    }
    class Dog extends Animal {
      breed: string = 'doge';
    }
    // interface NotOkay {
    //   [x: number]: Animal;
    //   [x: string]: Dog;
    // }
    interface NumbertDictionary {
      [index: string]: number;
      length: number;
      // name:string;
    }
    interface ReadonlyStringArray {
      readonly [index: number]: String;
    }
    let myArray1: ReadonlyStringArray = ['Alice', 'Bob'];
    // myArray1[2] = 'Mallory';
    interface ClockInterface {
      currentTime: Date;
    }
    class Clock implements ClockInterface {
      currentTime: Date = new Date();
      constructor(h: number, m: number) {

      }
    }
    interface ClockInterface {
      currentTime: Date;
      setTime(d: Date): any;
    }
    class Clock1 implements ClockInterface {
      currentTime: Date = new Date();
      setTime(d: Date) {
        this.currentTime = d;
      }
      constructor(h: number, m: number) {

      }
    }
    interface ClockConstructor {
      new(hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
      tick(): any;
    }
    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
      return new ctor(hour, minute);
    }
    // class DigitalClock implements ClockInterface {
    //   constructor(h: number, m: number) { }
    //   tick() {
    //     console.log("beep beep");
    //   }
    // }
    // class AnalogClock implements ClockInterface {
    //   constructor(h: number, m: number) { }
    //   tick() {
    //     console.log("tick tock");
    //   }
    // }
    // let digital = createClock(DigitalClock, 12, 17);
    // let analog = createClock(AnalogClock, 7, 32);
    interface Shape {
      color: string;
    }
    interface Square extends Shape {
      sideLength: number;
    }
    let square = <Square>{};
    square.color = 'blue';
    square.sideLength = 10;

    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>