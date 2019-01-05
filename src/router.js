import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Banner from './views/admin/banners/Banner.vue'
import CreateBanner from './views/admin/banners/CreateBanner.vue'
import EditBanner from './views/admin/banners/EditBanner.vue'
import DetailBanner from './views/admin/banners/DetailBanner.vue'
import Carousel from './views/admin/carousels/Carousel.vue'
import CreateCarousel from './views/admin/carousels/CreateCarousel.vue'
import EditCarousel from './views/admin/carousels/EditCarousel.vue'
import ShowCarousel from './views/admin/carousels/ShowCarousel.vue'
import NewMerchant from './views/admin/merchants/NewMerchant.vue'
import Merchant from './views/admin/merchants/Merchant.vue'
import DetailMerchant from './views/admin/merchants/DetailMerchant.vue'


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
      path: '/banner/detail',
      name: 'detailbanner',
      component: DetailBanner
    },

    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/carousel/create',
      name: 'createcarousel',
      component: CreateCarousel
    },
    {
      path: '/carousel/edit',
      name: 'editcarousel',
      component: EditCarousel
    },
    {
      path: '/carousel/show',
      name: 'showcarousel',
      component: ShowCarousel
    },

    {
      path: '/merchant/',
      name: 'merchant',
      component: Merchant
    },
    {
      path: '/new-merchant/',
      name: 'merchant',
      component: NewMerchant
    },

    {
      path: '/merchant/detail',
      name: 'detailmerchant',
      component: DetailMerchant
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
