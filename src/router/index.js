import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      redirect: '/firstPage',
      component: () => import('../components/Home'),
      children: [
        {
          path: 'firstPage',
          name: 'firstPage',
          component: () => import('../views/firstPage/firstPage'),
        },
        {
          path: 'userManger',
          name: 'userManger',
          component: () => import('../views/userManger/userManger'),
        },
        {
          path: 'dataSynchronize',
          name: 'dataSynchronize',
          component: () => import('../views/dataSynchronize/dataSynchronize'),
        },
        {
          path: 'hookManager',
          name: 'hookManager',
          component: () => import('../views/hookManager/hookManager'),
        },
        {
          path: 'approvalRecord',
          name: 'approvalRecord',
          component: () => import('../views/approvalRecord/approvalRecord'),
        },
        {
          path: 'eighthFool',
          name: 'eighthFool',
          component: () => import('../views/eighthFool/eighthFool'),
        },
        {
          path: 'reincarnation',
          name: 'reincarnation',
          component: () => import('../views/reincarnation/reincarnation'),
        },
        {
          path: 'moneyManager',
          name: 'moneyManager',
          component: () => import('../views/moneyManager/moneyManager'),
        },
        {
          path: 'dailyManager',
          name: 'dailyManager',
          component: () => import('../views/dailyManager/dailyManager'),
        },
        {
          path: 'roleLimit',
          name: 'roleLimit',
          component: () => import('../views/roleLimit/roleLimit'),
        },
        {
          path: 'systemManger',
          name: 'systemManger',
          component: () => import('../views/systemManger/systemManger'),
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
