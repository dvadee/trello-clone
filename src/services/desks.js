import api from '../plugins/axios';

export default {
  fetchAllDesks: () => api.get('desks.json')
};
