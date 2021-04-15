<template>
  <div class="Vue3Test1">
    <HelloWorld msg="hello" ref="helloRef" />
    <div>reactive：{{ count }}</div>
    <div>ref：{{ num }}</div>
    <div>readonly computed：{{ rComputed }}</div>
    <div>writable computed：{{ wComputed }}</div>
    <el-button @click="increment('2')">点击增加</el-button>
    <el-button @click="add">点击增加</el-button>
    <el-button @click="write">点击改值</el-button>
    <button @click="color = 'red'">红色</button>
    <button @click="color = 'blue'">蓝色</button>
    <button @click="color = 'orange'">橘黄色</button>
    <h3 ref="h3Ref">TemplateRefOne</h3>
    <div class="line">-------------------分割线------------------</div>
    <button @click="showContent">showContent</button>
  </div>
</template>
<script lang="ts">
import HelloWorld from './HelloWorld.vue';
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  isRef,
  computed,
  watch,
  onMounted,
  onUpdated,
  onUnmounted,
  provide,
} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: true,
    };
  },
  setup(props, context) {
    interface Computed {
      value: number;
    }
    console.log(props, context);
    const state = reactive({
      count: 0,
      count1: 1,
    });
    const num = ref(0);
    const color = ref('red');
    provide('globalColor', color);
    const h3Ref: any = ref(null);
    const helloRef: any = ref(null);
    const rComputed: Computed = computed(() => num.value + 3);
    const wComputed = computed({
      get: () => {
        return num.value + 3;
      },
      set: (value) => {
        console.log('set', value);
        num.value = value;
      },
    });
    const add = () => {
      num.value++;
    };
    const increment = (num: number) => {
      state.count += num;
    };
    const write = () => {
      wComputed.value = 99;
    };
    const showContent = () => {
      console.log('showContent', helloRef.value.content);
    };

    watch([() => state.count, () => state.count1, num], ([count, count1, num], [oldCount, oldCount1, oldNum]) => {
      console.log('watchState', count, count1, oldCount, oldCount1);
      console.log('watchRef', num, oldNum);
      if (num > 5) {
        const watchStop = watch(
          () => {},
          () => {}
        );

        watchStop();
      }
    });
    rComputed.value++;
    console.log(isRef(state.count), isRef(num));

    onMounted(() => {
      h3Ref.value.style.color = '#ff0000';
      console.log('mounted!');
    });
    onUpdated(() => {
      console.log('updated!');
    });
    onUnmounted(() => {
      console.log('unmounted!');
    });
    // 在 setup 中返回一个对象供页面使用
    // 这个对象中可以包含响应式的数据，也可以包含事件处理函数
    return {
      ...toRefs(state), // 将 state 上的每个属性，都转化为 ref 形式的响应式数据
      num,
      color,
      h3Ref,
      helloRef,

      rComputed,
      wComputed,

      add,
      increment,
      write,
      showContent,
    };
  },
});
</script>
<style lang="scss" scoped>
.Vue3Test1 {
  .line {
    background-color: #ff0000;
  }
}
</style>