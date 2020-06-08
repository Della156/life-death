import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home'),
      children: [
        {
          path: '/firstPage',
          name: 'firstPage',
          component: () => import('../views/firstPage/firstPage'),
        },
      ]
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
