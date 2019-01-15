import axios from 'axios'

export const state = () => ({
  list: [],
})

export const mutations = {
  SET (state, items) {
    state.list = items
  }
}

export const actions = {
  async get ({commit}) {
    let data = await axios.get('https://tecnoxperiencia.com/wp-json/wp/v2/posts?author=1&page=1&per_page=100')
    commit('SET', data.data)
  }
}
