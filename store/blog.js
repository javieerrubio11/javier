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
    let data = await axios.get('http://tecnoxperiencia.com/wp-json/wp/v2/posts?author=1')
    commit('SET', data.data)
    console.log(data.data)
  }
}
