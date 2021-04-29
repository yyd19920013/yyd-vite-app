import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  isLoading: false, //遮罩是否显示loading
  showRefreshBt: false, //遮罩是否显示刷新按钮
  status: '', //服务器错误状态
  userInfo: {}, //用户信息
};
const store = createStore({
  state,
  getters,
  actions,
  mutations,
});

export default store;
