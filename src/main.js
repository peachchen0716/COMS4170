import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import routes from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({routes});

const store = new Vuex.Store({
  state: {
    learnProgress: 0,
    quizProgress: 0,
    learnSet: new Set(),
    quizSet: new Set(),
  },
  mutations: {
    incLearn (state) {
      state.learnProgress += 12.5
    },
    incQuiz (state) {
      state.quizProgress += 50
    },
    updateLearnSet(state, name) {
      state.learnSet.add(name)
    },
    updateQuizSet(state, name) {
      state.quizSet.add(name)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
