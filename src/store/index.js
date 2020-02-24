import Vue from 'vue';
import Vuex from 'vuex';
import desks from './modules/desks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    desks
  }
});
