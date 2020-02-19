import api from '../plugins/axios'

export default {
  fetch() {
    return api.get('test.json')
  }
}