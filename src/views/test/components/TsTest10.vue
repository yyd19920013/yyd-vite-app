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
    console.log('%c --------------------装饰器--------------------', 'color:red;');
    function sealed(target: any) {
      // do something with "target" ...
      console.log('sealed');
    }
    @sealed
    class Greeter {
      greeting: string;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
        return "Hello, " + this.greeting;
      }
    }
    console.log('%c --------------------装饰器--------------------', 'color:red;');

    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>