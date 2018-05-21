import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('@/components/Index')
const Activity = () => import('@/components/Activity')
const NewActivity = () => import('@/components/NewActivity')
const ActivityDetail = () => import('@/components/ActivityDetail')

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   component: NotFound,
    // },
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/new-activity',
      component: NewActivity,
    },
    {
      path: '/activity',
      component: Activity,
      children: [{
        path: 'detail/:id',
        component: ActivityDetail,
      }],
    },
  ],
})
