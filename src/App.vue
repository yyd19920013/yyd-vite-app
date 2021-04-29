<template>
  <div v-if="onOff" class="App">
    <router-view />
    <Loading :showLoading="isLoading" :showRefreshBt="showRefreshBt" :status="status" />
  </div>
</template>
<script lang="ts">
import Loading from '@/components/common/Loading.vue';
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

interface state {
  isLoading: boolean;
  showRefreshBt: boolean;
  status: number;
}

export default defineComponent({
  data() {
    return {
      onOff: true,
    }
  },

  computed: {
    ...mapState({
      isLoading(state: state) {
        return state.isLoading;
      },
      showRefreshBt(state: state) {
        return state.showRefreshBt;
      },
      status(state: state) {
        return state.status;
      },
    })
  },

  created() {
    //挂载刷新方法在window上
    (<any>window).webviewRefresh = (<any>this).webviewRefresh;
  },

  methods: {
    webviewRefresh() {
      (<any>this).onOff = false;
      (<any>this).$nextTick(() => {
        (<any>this).onOff = true;
      });
    },
  },

  components: {
    Loading,
  },
});
</script>
<style lang="scss">
@import "css/index.scss";
</style>