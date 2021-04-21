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
    console.log('%c --------------------基础类型--------------------', 'color:red;');
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
    console.log('%c --------------------基础类型--------------------', 'color:red;');

    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>