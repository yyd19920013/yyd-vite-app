<template>
  <div v-if="onOff" class="App">
    <router-view />
    <Loading :showLoading="isLoading" :showRefreshBt="showRefreshBt" :status="status" />
  </div>
</template>
<script lang="ts">
import { StateObj } from '@/store/interface';
import Loading from '@/components/common/Loading.vue';
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
  data() {
    return {
      onOff: true,
    }
  },

  computed: {
    ...mapState({
      isLoading(state: StateObj) {
        return state.isLoading;
      },
      showRefreshBt(state: StateObj) {
        return state.showRefreshBt;
      },
      status(state: StateObj) {
        return state.status;
      },
    })
  },

  created() {
    // 挂载刷新方法在window上
    (window as any).webviewRefresh = (this as any).webviewRefresh;
  },

  methods: {
    webviewRefresh() {
      (this as any).onOff = false;
      (this as any).$nextTick(() => {
        (this as any).onOff = true;
      });
    },
  },

  components: {
    Loading,
  },
});
</script>
<style lang="scss">
@import "@/assets/css/index.scss";
</style>