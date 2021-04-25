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
    console.log('%c --------------------类型兼容性--------------------', 'color:red;')
    interface Named {
      name: string;
    }
    class Person {
      name: string = '';
    }
    let p: Named;
    p = new Person();
    interface Named1 {
      name: string;
    }
    let x: Named1;
    let y = { name: 'Alice', location: 'Seattle' };
    x = y;
    function greet(n: Named1) {
      console.log('Hello，' + n.name);
    }
    greet(y);
    let x1 = (a: number) => 0;
    let y1 = (b: number, s: string) => 0;
    y1 = x1;
    // x1 = y1;
    let items = [1, 2, 3];
    items.forEach((item, index, array) => console.log(item));
    enum EventType { Mouse, Keyboard }
    interface Event { timestamp: number; }
    interface MouseEvent extends Event { x: number; y: number }
    interface KeyEvent extends Event { keyCode: number }
    function listenEvent(eventType: EventType, handler: (n: Event) => void) {
      /* ... */
    }
    // Unsound, but useful and common
    // listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
    // Undesirable alternatives in presence of soundness
    listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
    listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));
    // Still disallowed (clear error). Type safety enforced for wholly incompatible types
    // listenEvent(EventType.Mouse, (e: number) => console.log(e));
    function invokeLater(args: any[], callback: (...args: any[]) => void) {
      /* ... Invoke callback with 'args' ... */
    }
    // Unsound - invokeLater "might" provide any number of arguments
    invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));
    // Confusing (x and y are actually required) and undiscoverable
    invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));
    enum Status { Ready, Waiting };
    enum Color { Red, Blue, Green };
    let status = Status.Ready;
    // status = Color.Green;
    class Animal {
      feet: number = 0;
      constructor(name: string, numFeet: number) { }
    }
    class Size {
      feet: number = 0;
      constructor(numFeet: number) { }
    }
    let a: Animal;
    let s: Size;
    // a = s;  // OK
    // s = a;  // OK
    interface Empty<T> {

    }
    let x2: Empty<number>;
    let y2: Empty<string>;
    x = y;
    interface NotEmpty<T> {
      data: T;
    }
    let x3: NotEmpty<number>;
    let y3: NotEmpty<string>;
    // x3 = y3;  // Error, because x and y are not compatible
    // let identity = function <T>(x: T): T {
    //   // ...
    // }
    // let reverse = function <U>(y: U): U {
    //   // ...
    // }
    // identity = reverse;  // OK, because (x: any) => any matches (y: any) => any

    console.log('%c --------------------类型兼容性--------------------', 'color:red;');
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>