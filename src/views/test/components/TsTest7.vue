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
    console.log('%c --------------------类型推论--------------------', 'color:red;');
    let x = [0, 1, null];
    // let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
    // function createZoo(): Animal[] {
    //   return [new Rhino(), new Elephant(), new Snake()];
    // }
    window.onmousedown = function(mouseEvent: any) {
      console.log(mouseEvent.button);  //<- Now, no error is given
    };
    // function createZoo(): Animal[] {
    //   return [new Rhino(), new Elephant(), new Snake()];
    // }

    console.log('%c --------------------类型推论--------------------', 'color:red;');
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>