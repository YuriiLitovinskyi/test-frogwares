import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NoInfo from './views/NoInfo.vue'
import SecondPage from './components/SecondPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/no-info',
      name: 'no-info',
      component: NoInfo
    },
    {
      path: '/second',
      name: 'second',    
      component: SecondPage
    }
  ]
})
