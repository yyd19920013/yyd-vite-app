<template>
  <div class="name"></div>
</template>
<script lang="ts">
import { onMounted } from 'vue';

export default {
  data() {
    return {

    };
  },
  setup(props: object, context: object) {
    console.log('%c --------------------高级类型--------------------', 'color:red;');
    // function extend<T, U>(first: T, second: U): T & U {
    //   let result = <T & U>{};
    //   for (let id in first) {
    //     (<any>result)[id] = (<any>first)[id];
    //   }
    //   for (let id in second) {
    //     if (!result.hasOwnProperty(id)) {
    //       (<any>result)[id] = (<any>second)[id];
    //     }
    //   }
    //   return result;
    // }
    // class Person {
    //   constructor(public name: string) { }
    // }
    // interface Loggable {
    //   log(): void;
    // }
    // class ConsoleLogger implements Loggable {
    //   log() { }
    // }
    // var jim = extend(new Person('Jim'), new ConsoleLogger());
    // var n = jim.name;
    // jim.log();
    function padLeft(value: string, padding: any) {
      if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
      }
      if (typeof padding === 'string') {
        return padding + value;
      }
      throw new Error(`Expected string or number，got '${padding}'.`);
    }
    let str: string = padLeft('Hello world', 4);
    console.log(str);
    // interface Bird {
    //   fly(): any;
    //   layEggs(): any;
    // }
    // interface Fish {
    //   swim(): any;
    //   layEggs(): any;
    // }
    // function getSmallPet(): Fish | Bird {
    //   // ...
    // }
    // let pet = getSmallPet();
    // pet.layEggs(); // okay
    // // pet.swim();    // errors
    function isNumber(x: any): x is number {
      return typeof x === "number";
    }
    function isString(x: any): x is string {
      return typeof x === "string";
    }
    function padLeft1(value: string, padding: string | number) {
      if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
      }
      if (isString(padding)) {
        return padding + value;
      }
      throw new Error(`Expected string or number, got '${padding}'.`);
    }
    interface Padder {
      getPaddingString(): string
    }
    class SpaceRepeatingPadder implements Padder {
      constructor(private numSpaces: number) { }
      getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
      }
    }
    class StringPadder implements Padder {
      constructor(private value: string) { }
      getPaddingString() {
        return this.value;
      }
    }
    function getRandomPadder() {
      return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
    }
    // 类型为SpaceRepeatingPadder | StringPadder
    let padder: Padder = getRandomPadder();
    if (padder instanceof SpaceRepeatingPadder) {
      padder; // 类型细化为'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
      padder; // 类型细化为'StringPadder'
    }
    let s = "foo";
    // s = null; // 错误, 'null'不能赋值给'string'
    let sn: string | null = "bar";
    sn = null; // 可以
    // sn = undefined; // error, 'undefined'不能赋值给'string | null'
    function f(x: number, y?: number) {
      return x + (y || 0);
    }
    f(1, 2);
    f(1);
    f(1, undefined);
    // f(1, null);
    class C {
      a: number = 0;
      b?: number;
    }
    let c = new C();
    c.a = 12;
    // c.a = undefined;
    c.b = 13;
    c.b = undefined;
    // c.b = null;
    function f1(sn: string | null): string {
      if (sn == null) {
        return 'default';
      } else {
        return sn;
      }
    }
    function f2(sn: string | null): string {
      return sn || "default";
    }
    function broken(name: string | null): string {
      function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
      }
      name = name || "Bob";
      return postfix("great");
    }
    function fixed(name: string | null): string {
      function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
      }
      name = name || "Bob";
      return postfix("great");
    }
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
      if (typeof n === 'string') {
        return n;
      } else {
        return n();
      }
    }
    type Container<T> = { value: T };
    type Tree<T> = {
      value: T;
      left: Tree<T>;
      right: Tree<T>;
    }
    type LinkedList<T> = T & { next: LinkedList<T> };
    interface Person {
      name: string;
    }
    var people: LinkedList<Person>;
    // var s1 = people.name;
    // var s2 = people.next.name;
    // var s3 = people.next.next.name;
    // var s4 = people.next.next.next.name;
    type Easing = "ease-in" | "ease-out" | "ease-in-out";
    class UIElement {
      animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
          // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
          // error! should not pass null or undefined.
        }
      }
    }
    let button = new UIElement();
    button.animate(0, 0, "ease-in");
    // button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
    class BasicCalculator {
      public constructor(protected value: number = 0) { }
      public currentValue(): number {
        return this.value;
      }
      public add(operand: number): this {
        this.value += operand;
        return this;
      }
      public multiply(operand: number): this {
        this.value *= operand;
        return this;
      }
      // ... other operations go here ...
    }
    let v = new BasicCalculator(2)
      .multiply(5)
      .add(1)
      .currentValue();
    class ScientificCalculator extends BasicCalculator {
      public constructor(value = 0) {
        super(value);
      }
      public sin() {
        this.value = Math.sin(this.value);
        return this;
      }
      // ... other operations go here ...
    }
    let v1 = new ScientificCalculator(2)
      .multiply(5)
      .sin()
      .add(1)
      .currentValue();
    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
      return names.map(n => o[n]);
    }
    interface Person {
      name: string;
      age: number;
    }
    let person: Person = {
      name: 'Jarid',
      age: 35
    };
    let strings: string[] = pluck(person, ['name']); // ok, string[]
    let personProps: keyof Person; // 'name' | 'age'
    // pluck(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'
    function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
      return o[name]; // o[name] is of type T[K]
    }
    let name: string = getProperty(person, 'name');
    let age: number = getProperty(person, 'age');
    // let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'
    interface Map<T> {
      [key: string]: T;
    }
    let keys: keyof Map<number>; // string
    let value: Map<number>['foo']; // number
    interface PesonPartial {
      name?: string;
      age?: number;
    }
    type Readonly<T> = {
      readonly [P in keyof T]: T[P];
    }
    type Partial<T> = {
      [P in keyof T]?: T[P];
    }
    type PersonPartial = Partial<Person>;
    type ReadonlyPerson = Readonly<Person>;
    type Keys = 'option1' | 'option2';
    type Flags = { [K in Keys]: boolean };
    type Flags1 = {
      option1: boolean;
      option2: boolean;
    }
    type NullablePerson = { [P in keyof Person]: Person[P] | null };
    type PartialPerson = { [P in keyof Person]?: Person[P] };
    type Nullable<T> = { [P in keyof T]: T[P] | null };
    type Partial1<T> = { [P in keyof T]?: T[P] };
    // type Proxy<T> = {
    //   get(): T;
    //   set(value: T): void;
    // }
    // type Proxify<T> = {
    //   [P in keyof T]: Proxy<T[P]>;
    // }
    // function proxify<T>(o: T): Proxify<T> {
    //   // ... wrap proxies ...
    // }
    // let proxyProps = proxify(props);
    // Exclude < T, U > --从T中剔除可以赋值给U的类型。
    // Extract < T, U > --提取T中可以赋值给U的类型。
    // NonNullable < T > --从T中剔除null和undefined。
    // ReturnType < T > --获取函数返回值类型。
    // InstanceType < T > --获取构造函数类型的实例类型。
    type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
    type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

    type T02 = Exclude<string | number | (() => void), Function>;  // string | number
    type T03 = Extract<string | number | (() => void), Function>;  // () => void

    type T04 = NonNullable<string | number | undefined>;  // string | number
    type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]

    function f4(s: string) {
      return { a: 1, b: s };
    }

    class C1 {
      x = 0;
      y = 0;
    }

    type T10 = ReturnType<() => string>;  // string
    type T11 = ReturnType<(s: string) => void>;  // void
    type T12 = ReturnType<(<T>() => T)>;  // {}
    type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
    type T14 = ReturnType<typeof f4>;  // { a: number, b: string }
    type T15 = ReturnType<any>;  // any
    type T16 = ReturnType<never>;  // any
    // type T17 = ReturnType<string>;  // Error
    // type T18 = ReturnType<Function>;  // Error

    type T20 = InstanceType<typeof C1>;  // C
    type T21 = InstanceType<any>;  // any
    type T22 = InstanceType<never>;  // any
    // type T23 = InstanceType<string>;  // Error
    // type T24 = InstanceType<Function>;  // Error

    console.log('%c --------------------高级类型--------------------', 'color:red;');
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>