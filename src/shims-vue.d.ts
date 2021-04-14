import { Router } from 'vue-router';
import { Store } from 'vuex';

// 扩充
declare module 'vue/types/vue' {
  interface Vue {
    $router: Router;
    $store: Store<any>;
  }
}
