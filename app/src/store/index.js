import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    //FIXME: directly extend in account store module
    // Extend drizzle store with list available accounts
    listAccounts: state => {
      return state.accounts.accountBalances;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
