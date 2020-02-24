import api from '../../services/desks';

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
  }
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
};
