import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import otherpage from '@/components/otherpage'
import checkuser from '@/components/checkuser'
import adduser from '@/components/adduser'
import manageuser from '@/components/manageuser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/otherpage',
      name: 'otherpage',
      component: otherpage
    },
    {
      path: '/homePage',
      name: 'homepage',
      component: homePage
    },
    {
      path: '/checkuser',
      name: 'checkuser',
      component: checkuser
    }, {
      path: '/adduser',
      name: 'adduser',
      component: adduser
    }, {
      path: '/manageuser',
      name: 'manageuser',
      component: manageuser
    }
  ]
})
