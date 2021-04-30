<template>
  <div class="home">
    <div>{{ date('2021/4/29') }}</div>
    <el-button type="primary" @click="getList">请求接口数据</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { testAxios } from '@/services';
import { date } from '@/filters';

export default defineComponent({
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
      const res = await testAxios({ pageIndex: 1, pageSize: 10 });

      console.log(res);
    },
  }
});
</script>
<style lang="scss" scoped>
@import "css/public.scss";
</style>