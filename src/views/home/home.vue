<template>
  <div class="home">
    <div>首页</div>
    <div>{{ date('2021/4/29') }}</div>
    <el-button type="primary" @click="getList">请求接口数据</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { date } from '@/filters';

export default defineComponent({
  autoRegPage: true,
  data() {
    return {
      date,
    };
  },
  setup(props: object, context: object) {
    return {

    };
  },
  methods: {
    async getList() {
      const res = await (this as any).$services.testAxios({ pageIndex: 1, pageSize: 10 });

      console.log(res);
    },
  }
});
</script>
<style lang="scss" scoped>
@import "@/assets/css/public.scss";
</style>