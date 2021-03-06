import Vuex from "vuex"

import defaultState from "./state/state"
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
import Vue from "vue";

Vue.use(Vuex)

const store = () =>  new Vuex.Store({
  state: defaultState,
  mutations,
  getters,
  actions
});

export default store

  // if (module.hot) {
  //   module.hot.accept([
  //     './state/state.js',
  //     './mutations/mutations.js',
  //     './actions/actions.js',
  //     './getters/getters.js'
  //   ], () => {
  //     const newState = require('./state/state').default
  //     const newMutations = require('./mutations/mutations').default
  //     const newActions = require('./actions/actions').default
  //     const newGetters = require('./getters/getters').default

  //     store.hotUpdate({
  //       state: newState,
  //       mutations: newMutations,
  //       getters: newGetters,
  //       actions: newActions
  //     })
  //   })
  // }

  // return store

