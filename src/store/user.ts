// initial state
import { StoreOptions } from "vuex";

const state = () => ({
  loginUser: { userName: "未登录", role: "notLogin" },
});

export default {
  namespaced: true,
  state,
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 改为从远程请求获取登录信息
      commit("updateUser", { userName: "vighzhen" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
