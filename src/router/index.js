import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Search from '@/pages/search'
import Life from '@/pages/life'
import Community from '@/pages/community'
import Mine from '@/pages/mine'
import SubjectView from '@/pages/subjectView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name:'home',
      component: Home
    },
    {
      path: '/life',
      name:'life',
      component: Life
    },
    {
      path: '/subjectView/:id',
      name: 'subjectView',
      component: SubjectView
    },
    {
      path: '/community',
      name:'community',
      component: Community
    },
    {
      path: '/mine',
      name:'mine',
      component: Mine
    },
    {
      path: '/searchBefore',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
