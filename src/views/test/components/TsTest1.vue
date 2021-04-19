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
    class Greeter {
      greeting: string;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return 'Hello，' + this.greeting;
      }
    }
    let greeter = new Greeter('world');
    class Animal1 {
      move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
      }
    }
    class Dog1 extends Animal1 {
      bark() {
        console.log('Woof!Woof!');
      }
    }
    const dog1 = new Dog1();
    dog1.bark();
    dog1.move(10);
    dog1.bark();
    class Animal2 {
      name: string;
      constructor(theName: string) {
        this.name = theName;
      }
      move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
      }
    }
    class Snake2 extends Animal2 {
      constructor(name: string) {
        super(name);
      }
    }
    class Horse2 extends Animal2 {
      constructor(name: string) {
        super(name);
      }
      move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
      }
    }
    let sam = new Snake2('Sammy the Python');
    let tom: Animal2 = new Horse2('Tommy the Palomino');
    sam.move();
    tom.move(34);
    class Animal3 {
      public name: string;
      public constructor(theName: string) {
        this.name = theName;
      }
      public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`);
      }
    }
    class Animal4 {
      private name: string;
      constructor(theName: string) {
        this.name = theName;
      }
    }
    // new Animal4('Cat').name;
    class Animal5 {
      private name: string;
      constructor(thisName: string) {
        this.name = thisName;
      }
    }
    class Rhino extends Animal5 {
      constructor() {
        super('Rhino');
      }
    }
    class Employee {
      private name: string;
      constructor(theName: string) {
        this.name = theName;
      }
    }
    let animal = new Animal5('Goat');
    let rhino = new Rhino();
    let employee = new Employee('Bob');
    console.log(animal, rhino, employee);
    class Person {
      protected name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
    class Employee1 extends Person {
      private department: string;

      constructor(name: string, department: string) {
        super(name);
        this.department = department;
      }

      public getElevatorPitch() {
        return `Hello，my name is ${this.name} and I work in ${this.department}`;
      }
    }
    let howard = new Employee1('Howard', 'Sales');
    console.log(howard.getElevatorPitch());
    // console.log(howard.name);
    class Person2 {
      protected name: string;
      protected constructor(theName: string) {
        this.name = theName;
      }
    }
    class Employee2 extends Person {
      private department: string;
      constructor(name: string, department: string) {
        super(name);
        this.department = department;
      }
      public getElevatorPitch() {
        return `Hello，my name is ${this.name} and I work in ${this.department}.`;
      }
    }
    let howard2 = new Employee2('Howard', 'Sales');
    // let john = new Person2('John');
    console.log(howard2);
    class Octopus {
      readonly name: string;
      readonly numberOfLegs: number = 8;
      constructor(theName: string) {
        this.name = theName;
      }
    }
    let dad = new Octopus('Man width the 8 strong legs');
    // dad.name = 'Man width the 3-piece suit';
    class Octopus1 {
      readonly numberOfLegs: number = 8;
      constructor(readonly name: string) {

      }
    }
    class Employee3 {
      fullName: string = '';
    }
    let employee3 = new Employee3();
    employee3.fullName = 'Bob Smith';
    if (employee3.fullName) {
      console.log(employee3.fullName);
    }
    class Grid {
      static origin = { x: 0, y: 0 };
      calculateDistanceFromOrigin(point: { x: number; y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
      }
      constructor(public scale: number) {

      }
    }
    let grid1 = new Grid(1.0);
    let grid2 = new Grid(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    abstract class Animal6 {

    }

    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>