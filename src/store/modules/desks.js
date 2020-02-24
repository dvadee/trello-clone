import api from '../../services/desks';
import { last } from 'lodash';

const state = {
  all: [],
  colors: [
    '#C5CAE9',
    '#303F9F',
    '#FFEB3B',
    '#E64A19',
    '#7C4DFF',
    '#E040FB',
    '#00796B'
  ]
};

const getters = {};

const actions = {
  createDesk({ state, commit }, desk = {}) {
    /**
     * TODO
     * join to api
     */
    const lastDesk = last(state.all);

    desk.id = lastDesk.id + 1;

    commit('pushDeskToAll', desk);
  },
  async getAllDesks({ commit }) {
    let desks = [];

    try {
      const res = await api.fetchAllDesks();
      const { data } = res;

      if (data.success === false) {
        throw new Error(data.error);
      }

      desks = data.desks;
    } catch (err) {
      console.error(err);
    } finally {
      commit('setDesksAll', desks);
    }
  }
};

const mutations = {
  setDesksAll(state, desks) {
    state.all = desks;
  },
  pushDeskToAll(state, desk) {
    state.all.push(desk);
  }
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
