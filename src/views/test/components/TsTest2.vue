<template>
  <div class="name"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {

    };
  },
  setup(props: object, context: object) {
    console.log('%c --------------------接口--------------------', 'color:red;');
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
    interface Shape {
      color: string;
    }
    interface PenStroke {
      pendWidth: number;
    }
    interface Square extends Shape, PenStroke {
      sideLength: number;
    }
    let square1 = <Square>{};
    square1.color = 'blue';
    square1.sideLength = 10;
    square1.pendWidth = 5.0;
    interface Counter {
      (start: number): string;
      interval: number;
      reset(): void;
    }
    function getCounter(): Counter {
      let counter = <Counter>function(start: number) { };
      counter.interval = 123;
      counter.reset = function() { };
      return counter;
    }
    let c1 = getCounter();
    c1(10);
    c1.reset();
    c1.interval = 5.0;
    class Control {
      private state: any;
    }
    interface SelectableControl extends Control {
      select(): void;
    }
    class Button extends Control implements SelectableControl {
      select() { }
    }
    class TextBox extends Control {
      select() { }
    }
    class Image implements SelectableControl {
      select() { }
    }
    class Location {

    }
    console.log('%c --------------------接口--------------------', 'color:red;');

    return {

    };
  },
});
</script>
<style lang="scss" scoped>
</style>