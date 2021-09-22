import { StateObj } from './interface';

export default {
  sidebar: (state: StateObj) => state.app.sidebar,
  device: (state: StateObj) => state.app.device,
};
