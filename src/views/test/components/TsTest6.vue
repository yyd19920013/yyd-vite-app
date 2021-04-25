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
    console.log('%c --------------------枚举--------------------', 'color:red;');
    enum Direction {
      Up = 1,
      Down,
      Left,
      Right,
    }
    let { Up, Down, Left, Right } = Direction;
    console.log(Up, Down, Left, Right);
    enum Direction1 {
      Up,
      Down,
      Left,
      Right,
    }
    enum Response {
      No = 0,
      Yes = 1,
    };
    function respond(recipient: string, message: Response): void {

    }
    respond('Princess Caroline', Response.Yes);
    // enum E {
    //   A = getSomeValue(),
    //   B,
    // }
    enum Direction2 {
      Up = 'UP',
      Down = 'DOWN',
      Left = 'LEFT',
      Right = 'RIGHT',
    }
    enum BooleanLikeHeterogenecusEnum {
      No = 0,
      Yes = 'YES',
    }
    enum E {
      X
    }
    enum E1 {
      X,
      Y,
      Z,
    }
    enum E2 {
      A = 1,
      B,
      C,
    }
    enum FileAccess {
      None,
      Read = 1 << 1,
      Write = 1 << 2,
      ReadWrite = Read | Write,
      G = '123'.length
    }
    enum ShapeKind {
      Circle,
      Square,
    }
    interface Circle {
      kind: ShapeKind.Circle;
      radius: number;
    }
    interface Square {
      kind: ShapeKind.Square;
      sideLength: number;
    }
    // let c: Circle = {
    //   kind: ShapeKind.Square,
    //   radius: 100,
    // }
    // enum E {
    //   Foo,
    //   Bar,
    // }
    // function f(x: E) {
    //   if (x !== E.Foo || x !== E.bar) {

    //   }
    // }
    // enum E {
    //   X, Y, Z
    // }
    // function f1(obj: { X: number }) {
    //   return obj.X;
    // }
    // f1(E);
    // enum Enum {
    //   A
    // };
    // let a = Enum.A;
    // let nameOfA = Enum(a);
    const enum Enum {
      A = 1,
      B = A * 2,
    }
    const enum Directions {
      Up,
      Down,
      Left,
      Right,
    }
    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
    console.log(directions);
    // declare enum Enum1 {
    //   A = 1,
    //   B,
    //   C = 2,
    // }

    console.log('%c --------------------枚举--------------------', 'color:red;');
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>