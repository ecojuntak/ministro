import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Banner from './views/admin/banners/Banner.vue'
import CreateBanner from './views/admin/banners/CreateBanner.vue'
import EditBanner from './views/admin/banners/EditBanner.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/banner/create',
      name: 'createbanner',
      component: CreateBanner
    },
    {
      path: '/banner/edit',
      name: 'editbanner',
      component: EditBanner
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
