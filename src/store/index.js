/**
 * Created by Administrator on 2017/7/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import movie from './modules/movie'
import book from './modules/book'
import subject from './modules/subject'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    movie,
    book,
    subject
  }
})
