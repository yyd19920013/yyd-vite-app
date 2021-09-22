import { StateObj } from './interface';

export default {
  UPDATE_LOADINGSTATUS(state: StateObj, payload: StateObj) {
    // 显示遮罩层loading状态
    state.isLoading = payload.isLoading;
  },
  SHOW_REFRESH_BT(state: StateObj, payload: StateObj) {
    // 显示遮罩层的刷新按钮
    state.showRefreshBt = payload.showRefreshBt;
    state.status = payload.status;
  },
};
