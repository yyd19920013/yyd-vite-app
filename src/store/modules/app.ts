import { StateObj } from '../interface';

const state: StateObj = {
  sidebar: {
    opened: true,
    withoutAnimation: false,
  },
  device: 'desktop',
};

const mutations = {
  TOGGLE_SIDEBAR: (_state: StateObj) => {
    _state.sidebar.opened = !_state.sidebar.opened;
    _state.sidebar.withoutAnimation = false;
  },
  CLOSE_SIDEBAR: (_state: StateObj, withoutAnimation: boolean) => {},
  TOGGLE_DEVICE: (_state: StateObj, device: string) => {
    _state.device = device;
  },
};

const actions = {
  toggleSideBar({ commit }: any) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSideBar({ commit }: any, { withoutAnimation }: any) {
    commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  toggleDevice({ commit }: any, device: any) {
    commit('TOGGLE_DEVICE', device);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
