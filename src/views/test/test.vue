<template>
  <div class="home">
    <TsTest1 />
    <CuttingLine />
    <VueTest1 />
  </div>
</template>
<script lang="ts">
import TsTest1 from './components/TsTest1.vue';
import VueTest1 from './components/Vue3Test1.vue';
import CuttingLine from './components/CuttingLine.vue';

export default {
  components: {
    TsTest1,
    VueTest1,
    CuttingLine,
  },
  data() {
    return {

    };
  },
  setup(props: object, context: object) {
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
</style>