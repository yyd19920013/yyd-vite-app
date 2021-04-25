<template>
  <div class="home">
    <VueTest1 />
    <CuttingLine />
    <TsTest1 />
    <TsTest2 />
    <TsTest3 />
    <TsTest4 />
    <TsTest5 />
    <TsTest6 />
    <TsTest7 />
    <TsTest8 />
    <TsTest9 />
    <TsTest10 />
  </div>
</template>
<script lang="ts">
import VueTest1 from './components/Vue3Test1.vue';
import TsTest1 from './components/TsTest1.vue';
import TsTest2 from './components/TsTest2.vue';
import TsTest3 from './components/TsTest3.vue';
import TsTest4 from './components/TsTest4.vue';
import TsTest5 from './components/TsTest5.vue';
import TsTest6 from './components/TsTest6.vue';
import TsTest7 from './components/TsTest7.vue';
import TsTest8 from './components/TsTest8.vue';
import TsTest9 from './components/TsTest9.vue';
import TsTest10 from './components/TsTest10.vue';
import CuttingLine from './components/CuttingLine.vue';

export default {
  components: {
    VueTest1,
    TsTest1,
    TsTest2,
    TsTest3,
    TsTest4,
    TsTest5,
    TsTest6,
    TsTest7,
    TsTest8,
    TsTest9,
    TsTest10,
    CuttingLine,
  },
  data() {
    return {};
  },
  setup(props: object, context: object) {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>