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
    console.log('%c --------------------类--------------------', 'color:red;');
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
      abstract makeSoud(): void;
      move(): void {
        console.log('roaming the earch...');
      }
    }
    abstract class Department {
      constructor(public name: string) {

      }
      printName(): void {
        console.log('Department name：' + this.name);
      }
      abstract printMeeting(): void;
    }
    class AccountingDepartment extends Department {
      constructor() {
        super('Accounting and Auditing');
      }
      printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am');
      }
      generrateReports(): void {
        console.log('Generrating accounting reports...');
      }
    }
    let department: Department;
    // department=new Department();
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
    // department.generateReports();
    class Greeter1 {
      greeting: string;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return 'Hello,' + this.greeting;
      }
    }
    let greeter1: Greeter1;
    greeter1 = new Greeter1('world');
    console.log(greeter1.greet());
    class Greeter2 {
      static standardGreeting = 'Hello,there';
      greeting: string = '';
      greet() {
        if (this.greeting) {
          return 'Hello,' + this.greeting;
        } else {
          return Greeter2.standardGreeting;
        }
      }
    }
    let greeter2: Greeter2;
    greeter2 = new Greeter2();
    console.log(greeter2.greet);
    let greeterMaker: typeof Greeter2 = Greeter2;
    greeterMaker.standardGreeting = 'Hey there!';
    let greeter3: Greeter2 = new greeterMaker();
    console.log(greeter2.greet());
    class Point {
      x: number = 0;
      y: number = 0;
    }
    interface Point3d extends Point {
      z: number;
    }
    let point3d: Point3d = { x: 1, y: 2, z: 3 };
    console.log('%c --------------------类--------------------', 'color:red;');

    return {

    };
  },
});
</script>
<style lang="scss" scoped>
</style>