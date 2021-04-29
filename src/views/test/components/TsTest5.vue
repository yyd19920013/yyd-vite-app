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
    console.log('%c --------------------泛型--------------------', 'color:red;');
    function identity(arg: any): any {
      return arg;
    }
    let num: number = identity('1');
    function identity1<T>(arg: T): T {
      return arg;
    }
    let num1: number = identity1(1);
    let output = identity1<string>("myString");
    let output1 = identity("myString");
    function identity2<T>(arg: T): T {
      return arg;
    }
    // function loggingIdentify<T>(arg:T):T{
    //   console.log(arg.length);
    //   return arg;
    // }
    function loggingIdentify<T>(arg: T[]): T[] {
      console.log(arg.length);
      return arg;
    }
    function loggingIdentify1<T>(arg: Array<T>): Array<T> {
      console.log(arg.length);
      return arg;
    }
    function identity3<T>(arg: T): T {
      return arg;
    }
    let myIdentity: <T>(arg: T) => T = identity3;
    let myIdentity1: <U>(arg: U) => U = identity3;
    let myIdentity2: { <T>(arg: T): T } = identity3;
    interface GenericIdentityFn {
      <T>(arg: T): T;
    }
    function identity4<T>(arg: T): T {
      return arg;
    }
    let myIdentity3: GenericIdentityFn = identity4;
    interface GenericIdentityFn1<T> {
      (arg: T): T;
    };
    function identity5<T>(arg: T): T {
      return arg;
    }
    let myIdentity4: GenericIdentityFn1<number> = identity;
    class GenericNumber<T>{
      zeroValue: T;
      add: (x: T, y: T) => T;
    }
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) {
      return x + y;
    }
    let stringNumberic = new GenericNumber<string>();
    stringNumberic.zeroValue = '';
    stringNumberic.add = function(x, y) {
      return x + y;
    }
    console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'));
    // function loggingIdentify<T>(arg:T):T{
    //   console.log(arg.length);
    //   return arg;
    // }
    interface Lengthwise {
      length: number;
    }
    function loggingIdentify2<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);
      return arg;
    }
    // loggingIdentify2(3);
    loggingIdentify2({ length: 10, value: 3 });
    function getProperty(obj: T, key: K) {
      return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, 'a');
    getProperty(x, 'm');
    function create<T>(c: { new(): T; }): T {
      return new c();
    }
    // class BeeKeeper {
    //   hasMask: boolean = false;
    // }
    // class ZooKeeper {
    //   nametag: string = '';
    // }
    // class Animal {
    //   numLegs: number = 0;
    // }
    // class Bee extends Animal {
    //   keeper: BeeKeeper;
    // }
    // class Lion extends Animal {
    //   keeper: ZooKeeper;
    // }
    // function createInstance<A extends Animal>(c: new () => A): A {
    //   return new c();
    // }
    // createInstance(Lion).keeper.nametag;
    // createInstance(Bee).keeper.hasMask;

    console.log('%c --------------------泛型--------------------', 'color:red;');
    return {

    };
  },
});
</script>
<style lang="scss" scoped>
</style>