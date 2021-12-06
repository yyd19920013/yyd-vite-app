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

// 非Module格式：xxxx
// 使用了Module的格式：ModuleName.xxxx，这里持久化的是Theme Module下面的persistData数据
const PERSIST_PATHS: string[] = ['isLoading']
const store = createStore({
    plugins: [
        (createPersistedState as any)({
            storage: window.localStorage,
            paths: PERSIST_PATHS,
        }),
    ],
    modules,
    state,
    getters,
    actions,
    mutations,
})

export default store;
