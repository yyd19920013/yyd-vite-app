import { StateObj } from './interface';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
const paths = import.meta.glob('./modules/*.ts');
const contents = import.meta.globEager('./modules/*.ts');
const modules: any = {};

Object.keys(paths).forEach((item) => {
  Object.assign(modules, contents[item]);
});

const state: StateObj = {
  isLoading: false, // 遮罩是否显示loading
  showRefreshBt: false, // 遮罩是否显示刷新按钮
  status: '', // 服务器错误状态
};

const store = createStore({
  plugins: [
    (createPersistedState as any)({
      storage: window.localStorage,
      reducer(resState: any) {
        const blackList = ['status', 'isLoading', 'showRefreshBt']; // 加入黑名单的state不会被持久化

        for (const attr in resState) {
          if (blackList.includes(attr)) {
            delete resState[attr];
          }
        }
        return resState;
      },
    }),
  ],
  modules,
  state,
  getters,
  actions,
  mutations,
});

export default store;
