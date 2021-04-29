export default {
  UPDATE_LOADINGSTATUS(state: any, payload: any) {
    //显示遮罩层loading状态
    state.isLoading = payload.isLoading;
  },
  SHOW_REFRESH_BT(state: any, payload: any) {
    //显示遮罩层的刷新按钮
    state.showRefreshBt = payload.showRefreshBt;
    state.status = payload.status;
  },
  UPDARA_USERINFO(state: any, payload: any) {
    //更新用户信息
    state.userInfo = payload.userInfo;
  },
};
